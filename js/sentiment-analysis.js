const positiveWords = ['amazing', 'awesome', 'beautiful', 'brilliant', 'cheerful', 'creative', 'delightful', 'dynamic', 'eager', 'elegant', 'energetic', 'excellent', 'fabulous', 'fantastic', 'friendly', 'fun', 'generous', 'gentle', 'glorious', 'graceful', 'grateful', 'great', 'happy', 'harmonious', 'helpful', 'honest', 'hopeful', 'impressive', 'incredible', 'inspiring', 'joyful', 'jubilant', 'kind', 'lively', 'lovely', 'loving', 'magnificent', 'marvelous', 'meaningful', 'motivated', 'optimistic', 'outstanding', 'passionate', 'peaceful', 'playful', 'pleasant', 'positive', 'powerful', 'proud', 'radiant', 'remarkable', 'resilient', 'respectful', 'responsible', 'rewarding', 'shining', 'skillful', 'smart', 'soothing', 'splendid', 'successful', 'sunny', 'supportive', 'talented', 'thankful', 'thoughtful', 'thriving', 'tranquil', 'trustworthy', 'unique', 'upbeat', 'vibrant', 'victorious', 'virtuous', 'warm', 'welcoming', 'wholesome', 'wonderful', 'worthy', 'youthful', 'zealous', 'accomplished', 'admired', 'bold', 'calm', 'charming', 'cheerful', 'compassionate', 'determined', 'divine', 'ecstatic', 'enthusiastic', 'exciting', 'flourishing', 'glorious', 'inspiring', 'jubilant', 'luminous', 'nurturing', 'persevering', 'pure', 'spectacular', 'unshakable'];
    const negativeWords = ['exhausted','bored', 'broken', 'confused', 'cranky', 'critical', 'cruel', 'defeated', 'depressed', 'desperate', 'devastated', 'difficult', 'disappointed', 'discouraged', 'disgusted', 'distraught', 'distressed', 'dreadful', 'embarrassed', 'envious', 'fearful', 'frustrated', 'gloomy', 'guilty', 'heartbroken', 'helpless', 'hopeless', 'horrible', 'hostile', 'hurt', 'impatient', 'insecure', 'insulted', 'jealous', 'lonely', 'lost', 'mad', 'miserable', 'nervous', 'offended', 'overwhelmed', 'pained', 'panicked', 'pessimistic', 'regretful', 'resentful', 'restless', 'sad', 'scared', 'selfish', 'shameful', 'shocked', 'sick', 'stressed', 'stubborn', 'suffering', 'terrible', 'terrified', 'threatened', 'tired', 'trapped', 'uncomfortable', 'unconfident', 'unhappy', 'unloved', 'unmotivated', 'unworthy', 'upset', 'useless', 'vulnerable', 'weak', 'worried', 'worthless', 'angst', 'apathetic', 'awkward', 'betrayed', 'cheated', 'cold', 'condemned', 'conflicted', 'cowardly', 'crushed', 'defensive', 'delusional', 'demeaned', 'distrusting', 'disturbed', 'doubtful', 'empty', 'fearful', 'grieving', 'hateful', 'humiliated', 'inferior', 'lonely'];

    const textarea = document.getElementById('textarea');
    const button = document.getElementById('button');
    const sentimentElement = document.getElementById('sentiment');
    const suggestionsElement = document.getElementById('suggestions');
    const exercisesElement = document.getElementById('exercises');

    button.addEventListener('click', analyzeSentiment);

    function analyzeSentiment() {
      const words = textarea.value.toLowerCase().split(' ');
      let positiveCount = 0;
      let negativeCount = 0;

      words.forEach((word) => {
        if (positiveWords.includes(word)) {
          positiveCount++;
        } else if (negativeWords.includes(word)) {
          negativeCount++;
        }
      });

      let sentiment = '';
      let suggestions = [];
      let exercises = [];

      if (positiveCount > negativeCount) {
        sentiment = 'Positive';
        suggestions = [
          'Keep up the good work!',
          'You are doing great!',
          'Remember to stay positive!',
        ];
        exercises = [
          'Take a few deep breaths and focus on the present moment.',
          'Write down three things you are grateful for today.',
          'Go for a short walk outside to clear your mind.',
        ];
      } else if (negativeCount > positiveCount) {
        sentiment = 'Negative';
        suggestions = [
          'Try to focus on the positive aspects of your life.',
          'Remember that things will get better with time.',
          'Reach out to a friend or family member for support.',
        ];
        exercises = [
          'Write down your thoughts and feelings to process them.',
          'Practice a relaxation technique, such as progressive muscle relaxation.',
          'Engage in a physical activity that you enjoy, such as going for a run or practicing yoga.',
        ];
    } else {
        sentiment = 'Neutral';
        suggestions = [
          'Take a step back and try to look at things from a different perspective.',
          'Practice mindfulness to stay present in the moment.',
          'Try to find the silver lining in a difficult situation.',
        ];
        exercises = [
          'Take a few minutes to stretch and move your body.',
          'Practice a creative activity, such as drawing or writing.',
          'Try to learn something new, such as a language or a skill.',
        ];
      }

      sentimentElement.textContent = `Sentiment: ${sentiment}`;
      suggestionsElement.innerHTML = '';
      suggestions.forEach((suggestion) => {
        const li = document.createElement('li');
        li.textContent = suggestion;
        suggestionsElement.appendChild(li);
      });
      exercisesElement.innerHTML = '';
      exercises.forEach((exercise) => {
        const li = document.createElement('li');
        li.textContent = exercise;
        exercisesElement.appendChild(li);
    });
}