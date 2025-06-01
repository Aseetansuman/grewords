import React, { useState, useEffect } from "react";
import { BookOpen, RefreshCw, Trophy, Brain, ChevronRight, CheckCircle, XCircle, Clock, Target, Upload, Plus, Download } from "lucide-react";

const allTables = {
  Table16: [
    {
      question: "What does 'Unnerve' mean?",
      options: ["To encourage", "To make someone lose confidence or courage", "To educate", "To make sleepy"],
      answer: 1,
      mnemonic: "Un + Nerve – That tough interview unnerved me completely.",
      difficulty: "medium"
    },
    {
      question: "Which best describes 'Unconscionable'?",
      options: ["Fair and reasonable", "Morally unacceptable or unjust", "Calculated and cold", "Casual and light"],
      answer: 1,
      mnemonic: "Un + Conscience – Charging ₹1000 for a 5-rupee mask during COVID was unconscionable.",
      difficulty: "hard"
    },
    {
      question: "A 'Tumult' is:",
      options: ["A peaceful gathering", "A loud confused noise or commotion", "A legal decision", "A calm strategy"],
      answer: 1,
      mnemonic: "Too Much – Tumult broke out in the class when the test results were announced.",
      difficulty: "medium"
    },
    {
      question: "A 'Tirade' is:",
      options: ["A long angry speech", "A short poem", "A silent protest", "A mild complaint"],
      answer: 0,
      mnemonic: "Terror + Parade – The principal's tirade after the prank was longer than a Republic Day parade.",
      difficulty: "medium"
    },
    {
      question: "What does 'Thwart' mean?",
      options: ["To support or assist", "To allow to happen", "To prevent or hinder", "To understand"],
      answer: 2,
      mnemonic: "Thwart = Throw Apart – Our plan to goa was thwarted by sudden rain.",
      difficulty: "easy"
    },
    {
      question: "'Tawdry' refers to something that is:",
      options: ["Elegant and classy", "Showy but cheap and of poor quality", "Timeless and simple", "Exclusive and expensive"],
      answer: 1,
      mnemonic: "Tawa + Dirty – Her tawdry jewelry looked shiny but was made of plastic.",
      difficulty: "hard"
    }
  ],
  Table13: [
    {
      question: "What is the meaning of 'Perturb'?",
      options: ["To calm and soothe", "To disturb or worry", "To excite greatly", "To remain indifferent"],
      answer: 1,
      mnemonic: "Partha + Disturb – Amma got perturbed when Partha didn't return her missed call for 2 hours.",
      difficulty: "medium"
    },
    {
      question: "If someone still misses their ex every time a romantic song plays, which word best describes their feeling?",
      options: ["Placate", "Pine", "Peevish", "Preempt"],
      answer: 1,
      mnemonic: "Pine = Pain Inside – She still pines for her ex every time 'Tum Hi Ho' plays on FM radio.",
      difficulty: "easy"
    },
    {
      question: "Which word means 'spicy and stimulating'?",
      options: ["Piquant", "Placid", "Pithy", "Profuse"],
      answer: 0,
      mnemonic: "Piquant = Pickle Aunt – That piquant mango pickle from Kerala had everyone sweating and smiling!",
      difficulty: "hard"
    },
    {
      question: "What does 'Pittance' mean?",
      options: ["A huge reward", "A polite refusal", "A very small amount (of money)", "A grand gesture"],
      answer: 2,
      mnemonic: "Pita + Tense – That tuition teacher gets such a pittance, even her pita (dad) gets tense.",
      difficulty: "medium"
    },
    {
      question: "The word 'Plodding' refers to something that is:",
      options: ["Quick and sharp", "Deceptively clever", "Slow and steady (often dull)", "Inconsistent and risky"],
      answer: 2,
      mnemonic: "Plot + Dinga – That plodding dinga boat on Dal Lake may be slow, but it always gets there.",
      difficulty: "medium"
    },
    {
      question: "Which of the following best fits the meaning of 'Ploy'?",
      options: ["A kind act", "A trick or tactic", "A law or rule", "A story"],
      answer: 1,
      mnemonic: "Ploy = Plan + Toy – His sudden 'I got you a chocolate' before asking to borrow money was clearly a ploy.",
      difficulty: "easy"
    },
    {
      question: "What does 'Precarious' mean?",
      options: ["Unquestionably safe", "Risky and unstable", "Emotionally draining", "Secret and stealthy"],
      answer: 1,
      mnemonic: "Pre-car Risk – That drive to Mussoorie in monsoon? Slippery roads, fog — totally precarious.",
      difficulty: "medium"
    },
    {
      question: "'Preemptive' action is:",
      options: ["Taken after a problem occurs", "Taken to delay an event", "Taken ahead of time to avoid a problem", "Always ineffective"],
      answer: 2,
      mnemonic: "Pre-Emptive Strike – Like India's preemptive vaccine drives during COVID's second wave.",
      difficulty: "hard"
    },
    {
      question: "'Profusion' means:",
      options: ["A logical argument", "A small bit of information", "A large quantity or abundance", "An emotional breakdown"],
      answer: 2,
      mnemonic: "Pro + Fusion – The profusion of colors during Holi – pink, yellow, green, and your white kurta is doomed!",
      difficulty: "medium"
    },
    {
      question: "Who is a 'Proponent'?",
      options: ["A neutral observer", "A person who opposes change", "A supporter or advocate", "A critic"],
      answer: 2,
      mnemonic: "Pro + Opponent – In the NEET debate, she was a strong proponent of offline exams, unlike her online-obsessed friends.",
      difficulty: "easy"
    }
  ],
  Table14: [
    {
      question: "What does 'Qualm' mean?",
      options: ["Confidence", "Regret", "Uneasiness or doubt", "Excitement"],
      answer: 2,
      mnemonic: "Qualm = Calm Lost – I had qualms about eating that roadside chowmein… and my stomach was right!",
      difficulty: "medium"
    },
    {
      question: "'Quandary' is best described as:",
      options: ["Clarity and peace", "A state of confusion or dilemma", "Quick reaction", "Joyful realization"],
      answer: 1,
      mnemonic: "Kuan + Dari – Like a villager standing on the edge of a well (kuan), in quandary whether to jump or not!",
      difficulty: "hard"
    },
    {
      question: "What does 'Quip' mean?",
      options: ["A slow speech", "A wise decision", "A witty or sarcastic remark", "A kind gesture"],
      answer: 2,
      mnemonic: "Quick + Rip – That girl made a quip so sharp, it ripped through the boy's ego in seconds!",
      difficulty: "easy"
    },
    {
      question: "Which word means 'showy but cheap'?",
      options: ["Rancid", "Raffish", "Rigid", "Reliable"],
      answer: 1,
      mnemonic: "Rafu + Stylish – That guy with shiny shirts and fake Gucci belt — totally raffish.",
      difficulty: "hard"
    },
    {
      question: "What does 'Rakish' describe?",
      options: ["Shy and reserved", "Dashing, confident, slightly immoral", "Extremely greedy", "Loyal and honest"],
      answer: 1,
      mnemonic: "Rakhi + Stylish – That rakish cousin at weddings, with beard, shades, and a different girl each time.",
      difficulty: "medium"
    },
    {
      question: "Which word means 'to cause irritation or anger'?",
      options: ["Redeem", "Rankle", "Rescue", "Revere"],
      answer: 1,
      mnemonic: "Ran + Kal – That insult from 'kal' (yesterday) still rankles me!",
      difficulty: "medium"
    },
    {
      question: "What does 'Reprobate' mean?",
      options: ["A virtuous person", "A morally unprincipled person", "A guide or mentor", "A forgetful elder"],
      answer: 1,
      mnemonic: "Re-Pura Bad – That reprobate is always drunk, flirts with aunties, and still asks for aloo chop money.",
      difficulty: "hard"
    },
    {
      question: "What does 'Respite' mean?",
      options: ["A painful regret", "A temporary break or relief", "A reward or praise", "A disagreement"],
      answer: 1,
      mnemonic: "Rest-Bite – After standing in line for Aadhar card all day, even a chai break feels like respite.",
      difficulty: "easy"
    }
  ],
  Table15: [
    {
      question: "What does 'Snide' mean?",
      options: ["Sincere and honest", "Indirectly mocking or critical", "Kind and generous", "Loud and boastful"],
      answer: 1,
      mnemonic: "Snide = Sneaky + Deride – That snide comment sounded like praise but had sarcasm dripping all over.",
      difficulty: "medium"
    },
    {
      question: "If someone deliberately ignores you in public, it's a:",
      options: ["Snub", "Snide", "Stint", "Spurn"],
      answer: 0,
      mnemonic: "Snub = Snap + Rub – She gave me a snub so cold, it felt like an ice rub to the ego.",
      difficulty: "easy"
    },
    {
      question: "What does 'Sordid' mean?",
      options: ["Pure and noble", "Morally dirty or base", "Exciting and heroic", "Well-structured"],
      answer: 1,
      mnemonic: "So Dirty – That politician's sordid past involves scams, black money, and more.",
      difficulty: "medium"
    },
    {
      question: "A 'Staid' person is:",
      options: ["Dramatic and impulsive", "Calm, serious, and conventional", "Unpredictable and wild", "Fake and flashy"],
      answer: 1,
      mnemonic: "Staid = Stayed – He stayed calm even during chaos – very staid.",
      difficulty: "hard"
    },
    {
      question: "'Steadfast' means:",
      options: ["Unreliable and lazy", "Firm and unwavering", "Casual and indifferent", "Fast and reckless"],
      answer: 1,
      mnemonic: "Steady + Fast – Steadfast soldiers stay true to their duty, no matter the odds.",
      difficulty: "easy"
    },
    {
      question: "To 'Stem' something means:",
      options: ["To cause it to grow", "To support and strengthen", "To stop or restrict its flow", "To uproot completely"],
      answer: 2,
      mnemonic: "Stem = Stop Stream – We tried to stem the flow of misinformation.",
      difficulty: "medium"
    },
    {
      question: "What is the meaning of 'Stolid'?",
      options: ["Highly emotional and reactive", "Calm and unemotional", "Playful and silly", "Evasive and confusing"],
      answer: 1,
      mnemonic: "Stolid = Solid – His face remained stolid even as the cricket match went into super over!",
      difficulty: "hard"
    },
    {
      question: "To 'Stymie' someone means:",
      options: ["To assist them in progress", "To prevent or hinder them", "To watch silently", "To cheer from afar"],
      answer: 1,
      mnemonic: "Stymie = Stop + Tie Me – Bureaucratic red tape stymied the launch of our startup.",
      difficulty: "medium"
    },
    {
      question: "What does 'Sanctimonious' mean?",
      options: ["Genuinely humble", "Making a show of being morally superior", "Rich and generous", "Rude and selfish"],
      answer: 1,
      mnemonic: "Saint + Money – He donates publicly to look like a saint, but it's all sanctimonious show.",
      difficulty: "hard"
    },
    {
      question: "What does 'Sanguine' mean?",
      options: ["Depressed and hopeless", "Cautiously indifferent", "Optimistic and cheerful", "Silent and brooding"],
      answer: 2,
      mnemonic: "Sun + Win – After seeing sun in the sky, she felt sanguine about the cricket match not being cancelled.",
      difficulty: "medium"
    },
    {
      question: "'Serendipity' refers to:",
      options: ["A logical decision", "Sudden good luck by chance", "An unfortunate event", "A planned strategy"],
      answer: 1,
      mnemonic: "Serene + Dip – I dipped into an old box and found my childhood Rakhi cards – what serendipity!",
      difficulty: "easy"
    },
    {
      question: "What is the meaning of 'Smattering'?",
      options: ["A loud protest", "A small amount or superficial knowledge", "A confident opinion", "A full understanding"],
      answer: 1,
      mnemonic: "Smatter = Scatter – Just a smattering of knowledge about GST and he's debating on news channels.",
      difficulty: "medium"
    },
    {
      question: "A 'Smug' person is:",
      options: ["Very shy and quiet", "Open to criticism", "Self-satisfied and arrogant", "Unaware of surroundings"],
      answer: 2,
      mnemonic: "Smug = Smug Face – That topper had such a smug face after the results, it irritated everyone.",
      difficulty: "easy"
    }
  ],
  Table17: [
    {
      question: "What does 'Apostate' mean?",
      options: ["A religious devotee", "One who abandons their beliefs or principles", "A church leader", "A faithful follower"],
      answer: 1,
      mnemonic: "A-Post-Ate – He ate at a different post (left his original position/belief).",
      difficulty: "hard"
    },
    {
      question: "If someone handles a crisis with complete 'Aplomb', they show:",
      options: ["Nervousness and anxiety", "Self-confidence and composure", "Anger and frustration", "Confusion and doubt"],
      answer: 1,
      mnemonic: "A-Plumb – Like a plumb line that stays perfectly straight and steady, even in wind.",
      difficulty: "hard"
    },
    {
      question: "An 'Antic' refers to:",
      options: ["A serious speech", "A playful or silly act", "A formal ceremony", "A quiet meditation"],
      answer: 1,
      mnemonic: "Anti + Comic – Those antics were so anti-serious, they were pure comedy!",
      difficulty: "medium"
    },
    {
      question: "Something 'Anodyne' is:",
      options: ["Highly stimulating", "Soothing and harmless", "Dangerous and toxic", "Loud and disruptive"],
      answer: 1,
      mnemonic: "Anno + Dyne – Like anno (year-old) dyne (medicine) – gentle and soothing, not harsh.",
      difficulty: "hard"
    },
    {
      question: "An 'Anathema' is:",
      options: ["A blessing or benediction", "Something detested or cursed", "A mathematical formula", "A type of flower"],
      answer: 1,
      mnemonic: "Ana + Theme – Ana hates that theme song so much, it's anathema to her!",
      difficulty: "hard"
    },
    {
      question: "'Wanton' behavior is:",
      options: ["Deliberate and undisciplined", "Careful and measured", "Accidental and innocent", "Planned and organized"],
      answer: 0,
      mnemonic: "Want + On – When you want something and turn it on full blast without control.",
      difficulty: "medium"
    },
    {
      question: "To 'Vie' means to:",
      options: ["To surrender completely", "To compete eagerly", "To hide away", "To observe silently"],
      answer: 1,
      mnemonic: "Vie = V.I.P. – Everyone vies to become a VIP by competing hard.",
      difficulty: "easy"
    },
    {
      question: "A 'Vicarious' experience is:",
      options: ["Direct and personal", "Experienced through others", "Imaginary and false", "Repeated multiple times"],
      answer: 1,
      mnemonic: "Vice + Areas – Like a vice-principal experiencing different areas through other teachers' reports.",
      difficulty: "medium"
    },
    {
      question: "To 'Vanquish' means to:",
      options: ["To retreat quietly", "To negotiate peacefully", "To defeat thoroughly", "To surrender gracefully"],
      answer: 2,
      mnemonic: "Van + Quish – The warrior's van quished (crushed) all enemies completely.",
      difficulty: "medium"
    }
  ]
};

export default function VocabQuizApp() {
  const [table, setTable] = useState("Table13");
  const [questions, setQuestions] = useState(allTables["Table13"]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [wrongAnswers, setWrongAnswers] = useState([]);
  const [reviewMode, setReviewMode] = useState(false);
  const [gameMode, setGameMode] = useState('normal');
  const [timeLeft, setTimeLeft] = useState(30);
  const [timerActive, setTimerActive] = useState(false);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [showMnemonic, setShowMnemonic] = useState(false);
  const [difficulty, setDifficulty] = useState('all');
  const [showAddQuestion, setShowAddQuestion] = useState(false);
  const [customTables, setCustomTables] = useState({});
  const [newQuestion, setNewQuestion] = useState({
    question: '',
    options: ['', '', '', ''],
    answer: 0,
    mnemonic: '',
    difficulty: 'medium'
  });

  // Timer effect
  useEffect(() => {
    let interval;
    if (timerActive && timeLeft > 0 && gameMode === 'timed') {
      interval = setInterval(() => {
        setTimeLeft(time => time - 1);
      }, 1000);
    } else if (timeLeft === 0 && gameMode === 'timed') {
      handleAnswer(-1);
    }
    return () => clearInterval(interval);
  }, [timerActive, timeLeft, gameMode]);

  const getAllTables = () => ({ ...allTables, ...customTables });

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'text/csv') {
      const reader = new FileReader();
      reader.onload = (e) => {
        const csv = e.target.result;
        const lines = csv.split('\n').filter(line => line.trim());
        const headers = lines[0].split(',').map(h => h.trim());
        
        if (headers.includes('question') && headers.includes('option1') && 
            headers.includes('option2') && headers.includes('option3') && 
            headers.includes('option4') && headers.includes('answer') && 
            headers.includes('mnemonic')) {
          
          const newQuestions = lines.slice(1).map(line => {
            const values = line.split(',').map(v => v.trim().replace(/"/g, ''));
            const questionData = {};
            headers.forEach((header, index) => {
              questionData[header] = values[index] || '';
            });
            
            return {
              question: questionData.question,
              options: [questionData.option1, questionData.option2, questionData.option3, questionData.option4],
              answer: parseInt(questionData.answer) || 0,
              mnemonic: questionData.mnemonic,
              difficulty: questionData.difficulty || 'medium'
            };
          }).filter(q => q.question);

          if (newQuestions.length > 0) {
            const tableName = `Custom_${Date.now()}`;
            setCustomTables(prev => ({
              ...prev,
              [tableName]: newQuestions
            }));
            alert(`Successfully uploaded ${newQuestions.length} questions to ${tableName}`);
          }
        } else {
          alert('CSV must have columns: question, option1, option2, option3, option4, answer, mnemonic, difficulty');
        }
      };
      reader.readAsText(file);
    }
  };

  const addNewQuestion = () => {
    if (newQuestion.question && newQuestion.options.every(opt => opt.trim()) && newQuestion.mnemonic) {
      const currentTableQuestions = getAllTables()[table] || [];
      const updatedQuestions = [...currentTableQuestions, { ...newQuestion }];
      
      if (table.startsWith('Custom_')) {
        setCustomTables(prev => ({
          ...prev,
          [table]: updatedQuestions
        }));
      } else {
        const newTableName = `Custom_${table}_${Date.now()}`;
        setCustomTables(prev => ({
          ...prev,
          [newTableName]: updatedQuestions
        }));
        setTable(newTableName);
      }
      
      setNewQuestion({
        question: '',
        options: ['', '', '', ''],
        answer: 0,
        mnemonic: '',
        difficulty: 'medium'
      });
      setShowAddQuestion(false);
      resetQuiz(table);
    } else {
      alert('Please fill in all fields');
    }
  };

  const downloadTemplate = () => {
    const csvContent = 'question,option1,option2,option3,option4,answer,mnemonic,difficulty\n' +
      '"What does \'Example\' mean?","Correct answer","Wrong answer 1","Wrong answer 2","Wrong answer 3",0,"Memory aid here","medium"\n' +
      '"Sample question 2?","Wrong answer","Correct answer","Wrong answer","Wrong answer",1,"Another memory aid","easy"';
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'vocab_questions_template.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  const getDifficultyColor = (diff) => {
    switch(diff) {
      case 'easy': return 'text-green-600';
      case 'medium': return 'text-yellow-600';
      case 'hard': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const filterQuestionsByDifficulty = (questions) => {
    if (difficulty === 'all') return questions;
    return questions.filter(q => q && q.difficulty === difficulty);
  };

  const handleAnswer = (index) => {
    if (selected !== null) return;
    setSelected(index);
    setTimerActive(false);
    
    const correct = index === questions[current].answer;
    if (correct) {
      setScore(score + 1);
      setStreak(streak + 1);
      if (streak + 1 > maxStreak) setMaxStreak(streak + 1);
    } else {
      setWrongAnswers([...wrongAnswers, questions[current]]);
      setStreak(0);
    }
    
    setTimeout(() => {
      if (current + 1 < questions.length) {
        setCurrent(current + 1);
        setSelected(null);
        setShowMnemonic(false);
        if (gameMode === 'timed') {
          setTimeLeft(30);
          setTimerActive(true);
        }
      } else {
        setShowScore(true);
      }
    }, 2000);
  };

  const resetQuiz = (selectedTbl) => {
    const allTablesData = getAllTables();
    const freshQuestions = filterQuestionsByDifficulty(allTablesData[selectedTbl] || []);
    if (freshQuestions.length > 0) {
      setQuestions(freshQuestions);
      setCurrent(0);
      setSelected(null);
      setScore(0);
      setShowScore(false);
      setWrongAnswers([]);
      setReviewMode(false);
      setStreak(0);
      setTimeLeft(30);
      setTimerActive(gameMode === 'timed');
      setShowMnemonic(false);
    }
  };

  const handleTableChange = (e) => {
    const selectedTable = e.target.value;
    setTable(selectedTable);
    resetQuiz(selectedTable);
  };

  const handleModeChange = (mode) => {
    setGameMode(mode);
    setTimerActive(mode === 'timed');
    resetQuiz(table);
  };

  const displayQuestions = reviewMode ? wrongAnswers : questions;
  const progressPercent = ((current + (showScore ? 1 : 0)) / displayQuestions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <BookOpen className="w-8 h-8 text-indigo-600" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Vocabulary Mastery
            </h1>
          </div>
          <p className="text-gray-600">Enhance your vocabulary with interactive quizzes and memorable mnemonics</p>
        </div>

        {/* Controls */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Choose Table:</label>
              <select 
                value={table} 
                onChange={handleTableChange} 
                className="w-full border-2 border-gray-200 rounded-lg px-3 py-2 focus:border-indigo-500 focus:outline-none"
              >
                {Object.keys(getAllTables()).map((tbl) => (
                  <option key={tbl} value={tbl}>
                    {tbl} {tbl.startsWith('Custom_') ? '(Custom)' : ''}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Difficulty:</label>
              <select 
                value={difficulty} 
                onChange={(e) => setDifficulty(e.target.value)} 
                className="w-full border-2 border-gray-200 rounded-lg px-3 py-2 focus:border-indigo-500 focus:outline-none"
              >
                <option value="all">All Levels</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Game Mode:</label>
              <div className="flex gap-2">
                {['normal', 'timed', 'practice'].map(mode => (
                  <button
                    key={mode}
                    onClick={() => handleModeChange(mode)}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      gameMode === mode 
                        ? 'bg-indigo-600 text-white' 
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {mode.charAt(0).toUpperCase() + mode.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Add Questions Section */}
          <div className="flex gap-2 flex-wrap mb-4">
            <button
              onClick={() => setShowAddQuestion(!showAddQuestion)}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              Add Question
            </button>
            
            <label className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 cursor-pointer">
              <Upload className="w-4 h-4" />
              Upload CSV
              <input 
                type="file" 
                accept=".csv" 
                onChange={handleFileUpload} 
                className="hidden"
              />
            </label>
            
            <button
              onClick={downloadTemplate}
              className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download Template
            </button>
          </div>

          {/* Stats */}
          <div className="flex justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Target className="w-4 h-4 text-green-600" />
              <span className="font-medium">Score: {score}</span>
            </div>
            <div className="flex items-center gap-2">
              <Trophy className="w-4 h-4 text-yellow-600" />
              <span className="font-medium">Streak: {streak}</span>
            </div>
            {gameMode === 'timed' && (
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-red-600" />
                <span className={`font-medium ${timeLeft <= 10 ? 'text-red-600' : ''}`}>
                  Time: {timeLeft}s
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Add Question Form */}
        {showAddQuestion && (
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Add New Question</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Question:</label>
                <input
                  type="text"
                  value={newQuestion.question}
                  onChange={(e) => setNewQuestion({...newQuestion, question: e.target.value})}
                  className="w-full border-2 border-gray-200 rounded-lg px-3 py-2 focus:border-indigo-500 focus:outline-none"
                  placeholder="What does 'word' mean?"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {newQuestion.options.map((option, idx) => (
                  <div key={idx}>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Option {idx + 1} {idx === newQuestion.answer && '(Correct)'}:
                    </label>
                    <input
                      type="text"
                      value={option}
                      onChange={(e) => {
                        const newOptions = [...newQuestion.options];
                        newOptions[idx] = e.target.value;
                        setNewQuestion({...newQuestion, options: newOptions});
                      }}
                      className="w-full border-2 border-gray-200 rounded-lg px-3 py-2 focus:border-indigo-500 focus:outline-none"
                      placeholder={`Option ${idx + 1}`}
                    />
                  </div>
                ))}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Correct Answer:</label>
                  <select
                    value={newQuestion.answer}
                    onChange={(e) => setNewQuestion({...newQuestion, answer: parseInt(e.target.value)})}
                    className="w-full border-2 border-gray-200 rounded-lg px-3 py-2 focus:border-indigo-500 focus:outline-none"
                  >
                    {newQuestion.options.map((_, idx) => (
                      <option key={idx} value={idx}>Option {idx + 1}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Difficulty:</label>
                  <select
                    value={newQuestion.difficulty}
                    onChange={(e) => setNewQuestion({...newQuestion, difficulty: e.target.value})}
                    className="w-full border-2 border-gray-200 rounded-lg px-3 py-2 focus:border-indigo-500 focus:outline-none"
                  >
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Mnemonic (Memory Aid):</label>
                <textarea
                  value={newQuestion.mnemonic}
                  onChange={(e) => setNewQuestion({...newQuestion, mnemonic: e.target.value})}
                  className="w-full border-2 border-gray-200 rounded-lg px-3 py-2 focus:border-indigo-500 focus:outline-none"
                  placeholder="A memorable way to remember this word..."
                  rows="2"
                />
              </div>
              
              <div className="flex gap-4">
                <button
                  onClick={addNewQuestion}
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
                >
                  Add Question
                </button>
                <button
                  onClick={() => setShowAddQuestion(false)}
                  className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {showScore ? (
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="mb-6">
              <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Quiz Complete!</h2>
              <p className="text-xl text-gray-600">
                You scored <span className="font-bold text-indigo-600">{score}</span> out of{" "}
                <span className="font-bold">{displayQuestions.length}</span>
              </p>
              <p className="text-lg text-gray-500 mt-2">
                Best streak: <span className="font-semibold text-purple-600">{maxStreak}</span>
              </p>
            </div>

            <div className="flex justify-center gap-4 flex-wrap">
              {wrongAnswers.length > 0 && (
                <button
                  onClick={() => {
                    setReviewMode(true);
                    setCurrent(0);
                    setSelected(null);
                    setShowScore(false);
                    setTimerActive(false);
                  }}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2"
                >
                  <Brain className="w-5 h-5" />
                  Review Wrong Answers ({wrongAnswers.length})
                </button>
              )}
              <button
                onClick={() => resetQuiz(table)}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2"
              >
                <RefreshCw className="w-5 h-5" />
                Restart Quiz
              </button>
            </div>
          </div>
        ) : displayQuestions.length > 0 ? (
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Progress Bar */}
            <div className="bg-gray-200 h-2">
              <div 
                className="bg-gradient-to-r from-indigo-500 to-purple-500 h-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>

            <div className="p-8">
              {/* Question Header */}
              <div className="flex justify-between items-center mb-6">
                <span className="text-sm font-medium text-gray-500">
                  Question {current + 1} of {displayQuestions.length}
                </span>
                <span className={`text-sm font-medium ${getDifficultyColor(displayQuestions[current]?.difficulty || 'medium')}`}>
                  {(displayQuestions[current]?.difficulty || 'medium').toUpperCase()}
                </span>
              </div>

              {/* Question */}
              <h2 className="text-2xl font-bold text-gray-800 mb-8 leading-relaxed">
                {displayQuestions[current].question}
              </h2>

              {/* Options */}
              <ul className="space-y-3 mb-6">
                {displayQuestions[current].options.map((opt, idx) => {
                  let optionClass = "p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 hover:shadow-md ";
                  
                  if (selected !== null) {
                    if (idx === displayQuestions[current].answer) {
                      optionClass += "bg-green-100 border-green-500 text-green-800";
                    } else if (selected === idx) {
                      optionClass += "bg-red-100 border-red-500 text-red-800";
                    } else {
                      optionClass += "bg-gray-50 border-gray-200 text-gray-500";
                    }
                  } else {
                    optionClass += "bg-gray-50 border-gray-200 hover:bg-indigo-50 hover:border-indigo-300";
                  }

                  return (
                    <li
                      key={idx}
                      onClick={() => handleAnswer(idx)}
                      className={optionClass}
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full bg-white border-2 border-current flex items-center justify-center font-semibold text-sm">
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span className="font-medium">{opt}</span>
                        {selected !== null && idx === displayQuestions[current].answer && (
                          <CheckCircle className="w-5 h-5 text-green-600 ml-auto" />
                        )}
                        {selected === idx && idx !== displayQuestions[current].answer && (
                          <XCircle className="w-5 h-5 text-red-600 ml-auto" />
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>

              {/* Mnemonic */}
              {(selected !== null || showMnemonic || gameMode === 'practice') && (
                <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-xl p-4 mt-6">
                  <div className="flex items-start gap-3">
                    <Brain className="w-5 h-5 text-purple-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-purple-800 mb-1">Memory Aid:</h4>
                      <p className="text-purple-700 italic">{displayQuestions[current].mnemonic}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Hint Button for Practice Mode */}
              {gameMode === 'practice' && selected === null && !showMnemonic && (
                <div className="text-center mt-6">
                  <button
                    onClick={() => setShowMnemonic(true)}
                    className="bg-purple-100 hover:bg-purple-200 text-purple-700 px-4 py-2 rounded-lg font-medium transition-colors"
                  >
                    Show Hint
                  </button>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <h2 className="text-xl font-bold text-gray-800 mb-2">No Questions Available</h2>
            <p className="text-gray-600 mb-4">
              No questions found for the selected difficulty level. Try selecting "All Levels" or add some questions.
            </p>
            <button
              onClick={() => setDifficulty('all')}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
            >
              Show All Levels
            </button>
          </div>
        )}
      </div>
    </div>
  );
}