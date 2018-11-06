class HomeController < ApplicationController
  def index
    @questions = Question.includes(:answers).order(:created_at)
    @surveys = Survey.all
  end

  def search
    if params[:search]
      search = PgSearch.multisearch(params[:search])
      @questions = render json: search
    else
      @questions = render json: Question.includes(:answers).all
    end
  end

  def upload
    file = params[:qsf].read
    survey = JSON.parse(file)
    # Survey details extracted out into database.
    inSurvey = Survey.create(sid: survey['SurveyEntry']['SurveyID'], name: survey['SurveyEntry']['SurveyName'])

    # Selects all elements with element 'SQ'..
    q = survey['SurveyElements'].select {|a| a['Element'] ==  'SQ'}

    # iterate through all the 'SQ' elements..
    q.each do |question|

      # Creates the question from the element..
      inQuestion = Question.create(qid: question['PrimaryAttribute'], title: question['SecondaryAttribute'], survey_id: inSurvey.id)

      # Some questions have empty fields, condition to separate goes here..
      if question['Payload']['Choices'].nil?
        Answer.create(input: '', question_id: inQuestion.id)
      else
        question['Payload']['Choices'].each do |answer|
          Answer.create(input: answer.last['Display'], question_id: inQuestion.id)
        end
      end
    end
    redirect_to root_path
  end
end
