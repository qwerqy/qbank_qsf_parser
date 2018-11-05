surveys = %w(Coffee_Incidence_Check FB_Incidence_Check_V2 Travel_Survey_Trends_Internal IR_Check_for_Roaming_Travel_Study Online_Shopping_-_Copy Property_N9_Incidence_Check Radio_Listeners_Incidence_Test)

surveys.each do |s|
  # File is parsed into json..
  survey = JSON.parse(File.read("app/assets/javascripts/qsf/#{s}.qsf"))
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
end
