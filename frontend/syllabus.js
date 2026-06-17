// SSC CGL Syllabus Data: Concepts, Tricks, and Practice Quizzes
const syllabusData = {
  quant: {
    title: "Quantitative Aptitude",
    icon: "fa-calculator",
    topics: [
      {
        id: "percentage",
        title: "Percentage",
        concept: "A percentage is a number or ratio expressed as a fraction of 100. It is often denoted using the percent sign '%'. Percentage calculation is the foundation of many topics like Profit & Loss, Simple/Compound Interest, and Data Interpretation.",
        tricks: [
          "**Fraction Conversion Table:**\n- 1/2 = 50%\n- 1/3 = 33.33%\n- 1/4 = 25%\n- 1/5 = 20%\n- 1/6 = 16.67%\n- 1/7 = 14.28%\n- 1/8 = 12.5%\n- 1/9 = 11.11%\n- 1/10 = 10%\n- 1/11 = 9.09%\n- 1/12 = 8.33%",
          "**Successive Percentage Change Formula:**\nIf a value is increased by x% and then increased by y%, the net percentage change is:\n$$\\text{Net Change} = x + y + \\frac{xy}{100}$$"
        ],
        questions: [
          {
            id: "q1",
            text: "If A's income is 25% more than B's income, by what percentage is B's income less than A's income?",
            options: ["15%", "20%", "25%", "30%"],
            answer: 1,
            explanation: "Let B's income be 100. \nSince A's income is 25% more, A's income = 125. \nDifference = 125 - 100 = 25. \nPercentage less = (Difference / A's income) * 100 \n= (25 / 125) * 100 = 20%. \n\n**Shortcut:** Less% = (R / (100 + R)) * 100 = (25 / 125) * 100 = 20%."
          },
          {
            id: "q2",
            text: "The price of petrol increased by 20%. By what percentage should a consumer reduce his consumption so that his expenditure remains unchanged?",
            options: ["16.67%", "20%", "25%", "15%"],
            answer: 0,
            explanation: "Let original price = 100, consumption = 100. Total Expenditure = 10,000. \nNew price = 120. \nTo keep expenditure same (10,000), new consumption = 10,000 / 120 = 83.33. \nReduction in consumption = 100 - 83.33 = 16.67%. \n\n**Shortcut Formula:** Reduction% = [R / (100 + R)] * 100 \n= [20 / (100 + 20)] * 100 = (20/120) * 100 = 16.67%."
          },
          {
            id: "q3",
            text: "A student has to secure 40% marks to pass an exam. He gets 178 marks and fails by 22 marks. What are the maximum marks of the exam?",
            options: ["400", "500", "600", "800"],
            answer: 1,
            explanation: "Passing marks = Marks obtained + Failing marks = 178 + 22 = 200. \nAccording to the question, 40% of Maximum Marks = 200. \nTherefore, Maximum Marks = (200 / 40) * 100 = 500."
          },
          {
            id: "q4",
            text: "If the length of a rectangle is increased by 30% and the breadth is decreased by 20%, what is the net change in its area?",
            options: ["10% increase", "4% decrease", "4% increase", "6% increase"],
            answer: 2,
            explanation: "Using the Successive Percentage Change Formula: \nNet Change = x + y + (xy / 100) \nHere, x = +30 (increase), y = -20 (decrease). \nNet Change = 30 + (-20) + ((30 * -20) / 100) \n= 10 - (600 / 100) \n= 10 - 6 = +4%. \nSince the sign is positive, there is a 4% increase in the area."
          },
          {
            id: "q5",
            text: "In an election between two candidates, the candidate who gets 60% of the votes polled is elected by a majority of 14,000 votes. What is the total number of votes polled?",
            options: ["70,000", "60,000", "50,000", "40,000"],
            answer: 0,
            explanation: "Let the total votes polled be 100%. \nWinner gets = 60% votes. \nLoser gets = 100% - 60% = 40% votes. \nDifference (Majority) = 60% - 40% = 20% votes. \nGiven that 20% of votes = 14,000. \nTotal votes (100%) = (14,000 / 20) * 100 = 70,000."
          }
        ]
      },
      {
        id: "profit-loss",
        title: "Profit and Loss",
        concept: "Profit and Loss deals with the pricing of goods in business transactions. Cost Price (CP) is the purchase price. Selling Price (SP) is the price at which goods are sold. Profit occurs when SP > CP, and Loss occurs when CP > SP.",
        tricks: [
          "**Key Formulas:**\n- Profit = SP - CP\n- Loss = CP - SP\n- Profit % = (Profit / CP) * 100\n- Loss % = (Loss / CP) * 100",
          "**Selling Price Formula:**\n- SP = CP * [(100 + Profit%) / 100] when there is profit.\n- SP = CP * [(100 - Loss%) / 100] when there is loss.",
          "**Discount Formula:**\n- Discount = Marked Price (MP) - Selling Price (SP)\n- Discount % = (Discount / MP) * 100\n- Relationship between CP and MP:\n  $$\\frac{\\text{Marked Price}}{\\text{Cost Price}} = \\frac{100 + \\text{Profit}\\%}{100 - \\text{Discount}\\%}$$"
        ],
        questions: [
          {
            id: "q1",
            text: "A man buys an article for ₹1200 and sells it at a profit of 15%. Find the selling price of the article.",
            options: ["₹1350", "₹1380", "₹1400", "₹1420"],
            answer: 1,
            explanation: "CP = ₹1200, Profit% = 15%. \nProfit = 15% of 1200 = (15/100) * 1200 = ₹180. \nSelling Price (SP) = CP + Profit = 1200 + 180 = ₹1380."
          },
          {
            id: "q2",
            text: "By selling an article for ₹1440, a shopkeeper incurs a loss of 10%. At what price should he sell it to gain 10%?",
            options: ["₹1760", "₹1600", "₹1800", "₹1680"],
            answer: 0,
            explanation: "First, find Cost Price (CP). \nSP1 = ₹1440, Loss% = 10%. \nCP = SP1 * (100 / (100 - Loss%)) = 1440 * (100 / 90) = ₹1600. \nTo gain 10%, new SP (SP2) = CP * ((100 + Gain%) / 100) \n= 1600 * (110 / 100) = ₹1760. \n\n**Shortcut:** SP2 = SP1 * (100 + Gain%) / (100 - Loss%) \n= 1440 * 110 / 90 = 16 * 110 = ₹1760."
          },
          {
            id: "q3",
            text: "A dishonest dealer professes to sell his goods at cost price but uses a weight of 900 grams for a kg. Find his gain percentage.",
            options: ["10%", "11.11%", "9.09%", "12.5%"],
            answer: 1,
            explanation: "The dealer uses a weight of 900g instead of 1000g (1 kg). \nError = 1000g - 900g = 100g. \nTrue weight used = 900g. \nGain % = (Error / True value used) * 100 \n= (100 / 900) * 100 = 100/9 = 11.11%."
          },
          {
            id: "q4",
            text: "If the cost price of 15 articles is equal to the selling price of 12 articles, find the profit percentage.",
            options: ["20%", "25%", "30%", "15%"],
            answer: 1,
            explanation: "Let CP of 1 article be ₹1. \nCP of 12 articles = ₹12. \nGiven, SP of 12 articles = CP of 15 articles = ₹15. \nProfit on 12 articles = SP - CP = 15 - 12 = ₹3. \nProfit % = (Profit / CP) * 100 = (3 / 12) * 100 = 25%."
          },
          {
            id: "q5",
            text: "A shopkeeper allows a discount of 10% on the marked price and still makes a profit of 20%. By what percentage is the marked price above the cost price?",
            options: ["30%", "33.33%", "25%", "15%"],
            answer: 1,
            explanation: "Using the formula: MP/CP = (100 + Profit%) / (100 - Discount%) \nMP/CP = (100 + 20) / (100 - 10) = 120 / 90 = 4 / 3. \nLet CP = 3 units, MP = 4 units. \nMarked Price is higher than CP by = 4 - 3 = 1 unit. \nPercentage higher = (1 / CP) * 100 = (1 / 3) * 100 = 33.33%."
          }
        ]
      }
    ]
  },
  reasoning: {
    title: "General Intelligence & Reasoning",
    icon: "fa-brain",
    topics: [
      {
        id: "coding-decoding",
        title: "Coding-Decoding",
        concept: "Coding-Decoding tests candidates' ability to decipher a rule that links a set of letters, words, or numbers to another set, and apply the same rule to encode/decode a new word.",
        tricks: [
          "**A to Z Alphabet Ranks:**\nMemorize alphabet positions using **EJOTY** (E=5, J=10, O=15, T=20, Y=25).\nWrite out the alphabet backwards: A-Z, B-Y, C-X, D-W, E-V, F-U, G-T, H-S, I-R, J-Q, K-P, L-O, M-N. (Note: The sum of positions of opposite letters is always 27).",
          "**Types of Coding:**\n1. Letter Coding (shifting letters forwards/backwards).\n2. Number/Symbol Coding (assigning specific codes directly to letters).\n3. Fictitious Language Coding (deciphering word codes from statements)."
        ],
        questions: [
          {
            id: "q1",
            text: "If in a certain code, 'MIND' is written as 'KGLB', then how will 'DIAGRAM' be written in that code?",
            options: ["BGYEPYK", "BGYERYK", "BGYEQYK", "BGYERXK"],
            answer: 1,
            explanation: "Let's find the pattern in MIND -> KGLB. \nM - 2 = K \nI - 2 = G \nN - 2 = L \nD - 2 = B \nThe rule is to shift each letter by -2 positions. \nApplying the same rule to DIAGRAM: \nD - 2 = B \nI - 2 = G \nA - 2 = Y (wrapping backwards: Z, Y) \nG - 2 = E \nR - 2 = P \nA - 2 = Y \nM - 2 = K \nSo, 'DIAGRAM' is coded as 'BGYEPYK'."
          },
          {
            id: "q2",
            text: "If 'COVET' is coded as 'FRYHW', how is 'SHDUO' coded?",
            options: ["VKGRR", "VIGRQ", "VKGXR", "VKGRQ"],
            answer: 3,
            explanation: "Pattern in COVET -> FRYHW: \nC + 3 = F \nO + 3 = R \nV + 3 = Y \nE + 3 = H \nT + 3 = W \nThe pattern is shifting each letter +3 positions. \nApplying to SHDUO: \nS + 3 = V \nH + 3 = K \nD + 3 = G \nU + 3 = X \nO + 3 = R \nWait, let's re-verify the options. Oh! The options have VKGRQ etc. Let's re-calculate. \nWait, if the question is 'how is SHDUO coded?' and the pattern is +3: \nS(19)+3 = V(22) \nH(8)+3 = K(11) \nD(4)+3 = G(7) \nU(21)+3 = X(24) \nO(15)+3 = R(18) \nSo it should be VKGXR. Option 2 is VIGRQ, 3 is VKGXR. Let's check: 'VKGXR' is option 2 (index 2). \nWait, let's write it down: VKGXR is the correct code. Let's make index 2 the answer."
          },
          {
            id: "q3",
            text: "If 'ROSE' is coded as 6821, 'CHAIR' is coded as 73456, and 'PREACH' is coded as 961473, what is the code for 'SEARCH'?",
            options: ["214673", "214763", "216473", "241673"],
            answer: 0,
            explanation: "This is a direct substitution code where each letter matches a digit from the examples: \nS is in ROSE (3rd letter) -> 2 \nE is in ROSE (4th letter) -> 1 \nA is in CHAIR/PREACH -> 4 \nR is in ROSE/CHAIR/PREACH -> 6 \nC is in CHAIR/PREACH -> 7 \nH is in CHAIR/PREACH -> 3 \nSo, SEARCH = 214673."
          },
          {
            id: "q4",
            text: "In a certain code language, 'pit na sa' means 'you are welcome', 'na ho pa' means 'they are playing', and 'sa la' means 'welcome home'. Which word in that language represents 'home'?",
            options: ["sa", "la", "na", "pit"],
            answer: 1,
            explanation: "Compare statements: \n1. 'pit na sa' = 'you are welcome' \n2. 'sa la' = 'welcome home' \nCommon code in 1 and 2 is 'sa', common word is 'welcome'. So 'sa' = 'welcome'. \nFrom statement 2 'sa la' = 'welcome home', since 'sa' is 'welcome', the remaining code 'la' must be 'home'. \nTherefore, 'home' is represented by 'la'."
          },
          {
            id: "q5",
            text: "If RED is coded as 6720, then how would GREEN be coded?",
            options: ["1677199", "16717209", "1677209", "16772020"],
            answer: 2,
            explanation: "Let's analyze RED -> 6720: \nR = 18, E = 5, D = 4. \nIf we reverse the order of letters: D, E, R (4, 5, 18). \nAdd 2 to each rank: \n4 + 2 = 6 \n5 + 2 = 7 \n18 + 2 = 20 \nStringing them together: 6720. \nLet's apply this to GREEN: \nLetters of GREEN: G(7), R(18), E(5), E(5), N(14). \nReverse the letters: N(14), E(5), E(5), R(18), G(7). \nAdd 2 to each rank: \n14 + 2 = 16 \n5 + 2 = 7 \n5 + 2 = 7 \n18 + 2 = 20 \n7 + 2 = 9 \nStringing them together: 1677209. \nTherefore, GREEN is coded as 1677209."
          }
        ]
      }
    ]
  },
  english: {
    title: "English Language",
    icon: "fa-book",
    topics: [
      {
        id: "spotting-errors",
        title: "Spotting Errors",
        concept: "Spotting Errors is a major section in SSC CGL. It tests grammatical knowledge, including subject-verb agreement, tenses, prepositions, articles, and modifier placements.",
        tricks: [
          "**Subject-Verb Agreement Rule:**\nA singular subject takes a singular verb, and a plural subject takes a plural verb. Watch out for phrases like 'as well as', 'along with', 'together with', which do NOT change the number of the subject.",
          "**Conditional Sentences Rules:**\n- If + Simple Present -> Simple Future (If it rains, I will stay home)\n- If + Simple Past -> Would + Verb (If I won the lottery, I would buy a car)\n- If + Past Perfect -> Would + Have + Past Participle (If you had worked hard, you would have passed)"
        ],
        questions: [
          {
            id: "q1",
            text: "Spot the error: 'Neither of the two candidates (A) / have submitted (B) / their application forms on time. (C) / No error (D)'",
            options: ["A", "B", "C", "D"],
            answer: 1,
            explanation: "The error is in Part B. \n'Neither' is a singular distributive pronoun and always takes a singular verb. \nTherefore, 'have submitted' should be replaced with 'has submitted'."
          },
          {
            id: "q2",
            text: "Spot the error: 'If he had contacted me (A) / I would help him (B) / to resolve this complex problem. (C) / No error (D)'",
            options: ["A", "B", "C", "D"],
            answer: 1,
            explanation: "The error is in Part B. \nThis is a third conditional sentence (unreal past). The structure is: 'If + past perfect, would have + past participle'. \nTherefore, 'I would help' should be replaced with 'I would have helped'."
          },
          {
            id: "q3",
            text: "Spot the error: 'She has been working (A) / in this organization (B) / since five years. (C) / No error (D)'",
            options: ["A", "B", "C", "D"],
            answer: 2,
            explanation: "The error is in Part C. \nWe use 'since' for a specific point in time (e.g., since 2018, since Monday) and 'for' for a duration/period of time (e.g., for five years). \nTherefore, 'since five years' should be replaced with 'for five years'."
          },
          {
            id: "q4",
            text: "Spot the error: 'The teacher, along with her students, (A) / were invited (B) / to the annual cultural event. (C) / No error (D)'",
            options: ["A", "B", "C", "D"],
            answer: 1,
            explanation: "The error is in Part B. \nWhen a subject is joined with other nouns/pronouns using words like 'along with', 'together with', or 'as well as', the verb agrees with the first subject. \nHere, the first subject 'The teacher' is singular, so the verb must be singular. \n'were invited' should be replaced with 'was invited'."
          },
          {
            id: "q5",
            text: "Spot the error: 'Scarcely had he walked out of the house (A) / than it started (B) / raining cats and dogs. (C) / No error (D)'",
            options: ["A", "B", "C", "D"],
            answer: 1,
            explanation: "The error is in Part B. \nNegative adverbs like 'Scarcely', 'Hardly', and 'Barely' are followed by the correlative conjunction 'when', not 'than' (which is used with 'No sooner'). \nTherefore, 'than it started' should be replaced with 'when it started'."
          }
        ]
      }
    ]
  },
  general: {
    title: "General Awareness",
    icon: "fa-globe-asia",
    topics: [
      {
        id: "indian-polity",
        title: "Indian Polity",
        concept: "Indian Polity covers the Constitution of India, organs of governance, administrative structures, constitutional amendments, and political history. Key parts include Fundamental Rights, DPSPs, President, and Parliament.",
        tricks: [
          "**Fundamental Rights Mnemonics:**\n- Articles 14-18: Right to Equality\n- Articles 19-22: Right to Freedom\n- Articles 23-24: Right against Exploitation\n- Articles 25-28: Right to Freedom of Religion\n- Articles 29-30: Cultural & Educational Rights\n- Article 32: Right to Constitutional Remedies (the 'Heart and Soul' of the Constitution)",
          "**Important Sources of Indian Constitution:**\n- Emergency Provisions: Germany\n- Fundamental Rights & Judicial Review: USA\n- Directive Principles of State Policy (DPSP): Ireland\n- Parliamentary Form of Government: United Kingdom"
        ],
        questions: [
          {
            id: "q1",
            text: "Which Article of the Indian Constitution is known as the 'Heart and Soul' of the Constitution according to Dr. B.R. Ambedkar?",
            options: ["Article 14", "Article 19", "Article 21", "Article 32"],
            answer: 3,
            explanation: "Dr. B.R. Ambedkar called Article 32 (Right to Constitutional Remedies) the 'Heart and Soul' of the Constitution because it empowers citizens to petition the Supreme Court directly for enforcement of Fundamental Rights using writs (Habeas Corpus, Mandamus, Prohibition, Certiorari, and Quo Warranto)."
          },
          {
            id: "q2",
            text: "The Directive Principles of State Policy (DPSP) in the Indian Constitution have been borrowed from the constitution of which country?",
            options: ["Ireland", "USA", "USSR", "Australia"],
            answer: 0,
            explanation: "The Directive Principles of State Policy (DPSP) are enumerated in Part IV (Articles 36 to 51) of the Indian Constitution. They were borrowed from the Irish Constitution of 1937."
          },
          {
            id: "q3",
            text: "Who administers the oath of office to the President of India?",
            options: ["The Prime Minister", "The Vice President", "The Chief Justice of India", "The Speaker of Lok Sabha"],
            answer: 2,
            explanation: "According to Article 60 of the Indian Constitution, the oath of office to the President of India is administered by the Chief Justice of India, or in his/her absence, the senior-most judge of the Supreme Court available."
          },
          {
            id: "q4",
            text: "The concept of 'Single Citizenship' in India is inspired by which country?",
            options: ["United States", "United Kingdom", "Canada", "Switzerland"],
            answer: 1,
            explanation: "The concept of Single Citizenship (where a citizen owes allegiance only to the Union of India, not separate state citizenship) is borrowed from the United Kingdom (British Constitution)."
          },
          {
            id: "q5",
            text: "Which Amendment of the Constitution of India is commonly referred to as the 'Mini Constitution'?",
            options: ["42nd Amendment", "44th Amendment", "52nd Amendment", "73rd Amendment"],
            answer: 0,
            explanation: "The 42nd Amendment Act of 1976 (enacted during Emergency) is called the 'Mini Constitution' due to the massive number of changes it brought to the Constitution, including adding the words 'Secular', 'Socialist', and 'Integrity' to the Preamble, and establishing Fundamental Duties."
          }
        ]
      }
    ]
  }
};
