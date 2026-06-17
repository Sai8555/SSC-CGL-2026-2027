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
      },
      {
        id: "ratio-proportion",
        title: "Ratio and Proportion",
        concept: "A ratio is a comparison of two quantities by division. A proportion is an equation that states that two ratios are equal (e.g. a:b = c:d). This is essential for solving partnership, mixtures, ages, and sharing problems.",
        tricks: [
          "**Combining Ratios:**\nIf $A:B = x:y$ and $B:C = p:q$, then to find $A:B:C$:\nMultiply $A:B$ by $p$ and $B:C$ by $y$.\n$$A:B:C = (x \\cdot p) : (y \\cdot p) : (y \\cdot q)$$",
          "**Mean, Third, and Fourth Proportional:**\n- Mean proportional between a and b = $\\sqrt{ab}$\n- Third proportional of a and b = $b^2 / a$\n- Fourth proportional of a, b, and c = $(b \\cdot c) / a$"
        ],
        questions: [
          {
            id: "q1",
            text: "If A:B = 2:3 and B:C = 4:5, find the ratio A:B:C.",
            options: ["8:12:15", "2:4:5", "8:10:15", "6:12:15"],
            answer: 0,
            explanation: "A:B = 2:3, B:C = 4:5. \nThe common term is B (3 in the first, 4 in the second). \nTo make them equal, multiply A:B by 4 and B:C by 3: \nA:B = (2*4):(3*4) = 8:12 \nB:C = (4*3):(5*3) = 12:15 \nTherefore, A:B:C = 8:12:15."
          },
          {
            id: "q2",
            text: "Find the mean proportional between 9 and 16.",
            options: ["12", "12.5", "14", "10"],
            answer: 0,
            explanation: "Mean Proportional = √(a * b) \nMean Proportional = √(9 * 16) = √144 = 12."
          },
          {
            id: "q3",
            text: "A sum of ₹3600 is divided among A, B, and C in the ratio 1:3:5. Find the share of B.",
            options: ["₹400", "₹1200", "₹2000", "₹800"],
            answer: 1,
            explanation: "Total sum = ₹3600. Ratio = 1:3:5. \nSum of ratio parts = 1 + 3 + 5 = 9 parts. \nValue of 1 part = 3600 / 9 = ₹400. \nB's share (3 parts) = 3 * 400 = ₹1200."
          },
          {
            id: "q4",
            text: "The ratio of the ages of two persons is 4:7 and the difference between their ages is 30 years. Find the sum of their ages.",
            options: ["110 years", "90 years", "70 years", "80 years"],
            answer: 0,
            explanation: "Let the ages be 4x and 7x. \nDifference = 7x - 4x = 3x. \nGiven, 3x = 30 => x = 10. \nSum of their ages = 4x + 7x = 11x = 11 * 10 = 110 years."
          },
          {
            id: "q5",
            text: "Two numbers are in the ratio 3:5. If 9 is subtracted from each, the new numbers are in the ratio 12:23. What is the smaller number?",
            options: ["27", "33", "49", "36"],
            answer: 1,
            explanation: "Let the numbers be 3x and 5x. \nAccording to the question: \n(3x - 9) / (5x - 9) = 12 / 23 \nCross-multiplying: \n23 * (3x - 9) = 12 * (5x - 9) \n69x - 207 = 60x - 108 \n9x = 99 => x = 11. \nSmaller number = 3x = 3 * 11 = 33."
          }
        ]
      },
      {
        id: "time-work",
        title: "Time and Work",
        concept: "Time and work deals with the efficiency of individuals or groups in completing a task. The work done is directly proportional to the time taken and efficiency. If a person can do a piece of work in D days, then in 1 day he does 1/D of the work.",
        tricks: [
          "**One Day Work Method:**\nIf A takes 'a' days to do a job, A's 1-day work = $1/a$.\nIf B takes 'b' days, B's 1-day work = $1/b$.\nCombined 1-day work of A & B = $\\frac{1}{a} + \\frac{1}{b} = \\frac{a+b}{ab}$.\nTime taken together = $\\frac{ab}{a+b}$ days.",
          "**MDH Formula:**\nFor group work comparison, where M = Men, D = Days, H = Hours, W = Work, E = Efficiency:\n$$\\frac{M_1 D_1 H_1 E_1}{W_1} = \\frac{M_2 D_2 H_2 E_2}{W_2}$$"
        ],
        questions: [
          {
            id: "q1",
            text: "A can complete a piece of work in 10 days, and B can complete the same work in 15 days. How long will they take to finish the work together?",
            options: ["5 days", "6 days", "8 days", "7.5 days"],
            answer: 1,
            explanation: "Combined time = (a * b) / (a + b) \nCombined time = (10 * 15) / (10 + 15) = 150 / 25 = 6 days. \n\n**Alternate Method (LCM):** \nLCM of 10 and 15 = 30 (Total Work units). \nA's efficiency = 30/10 = 3 units/day. \nB's efficiency = 30/15 = 2 units/day. \nTotal efficiency together = 3 + 2 = 5 units/day. \nDays taken = 30 / 5 = 6 days."
          },
          {
            id: "q2",
            text: "A and B together can do a work in 12 days, while B alone can do it in 30 days. In how many days can A alone complete the work?",
            options: ["18 days", "20 days", "24 days", "22 days"],
            answer: 1,
            explanation: "Let A's time be 'x' days. \nTogether 1-day work: 1/x + 1/30 = 1/12 \n1/x = 1/12 - 1/30 \nLCM of 12 and 30 = 60. \n1/x = (5 - 2) / 60 = 3 / 60 = 1 / 20. \nSo, A alone takes 20 days."
          },
          {
            id: "q3",
            text: "A is twice as efficient as B and takes 10 days less than B to finish a job. Find the time taken by B to complete the work.",
            options: ["10 days", "15 days", "20 days", "25 days"],
            answer: 2,
            explanation: "Let B's efficiency be 1 unit/day and B's time be 't' days. \nA's efficiency = 2 units/day and A's time = 't - 10' days. \nSince Work = Efficiency * Time: \n1 * t = 2 * (t - 10) \nt = 2t - 20 => t = 20 days. \nTherefore, B takes 20 days."
          },
          {
            id: "q4",
            text: "12 men can complete a work in 8 days. How many days will 16 men take to complete the same work?",
            options: ["6 days", "5 days", "4 days", "7 days"],
            answer: 0,
            explanation: "Using the MDH formula (M1 * D1 = M2 * D2): \n12 * 8 = 16 * D2 \n96 = 16 * D2 \nD2 = 96 / 16 = 6 days."
          },
          {
            id: "q5",
            text: "A, B, and C can complete a work in 12, 15, and 20 days respectively. They started working together, but A left 2 days before completion. Find the total number of days taken to finish the work.",
            options: ["5.8 days", "5.2 days", "6 days", "5.4 days"],
            answer: 0,
            explanation: "LCM of 12, 15, and 20 = 60 units (Total Work). \nEfficiency: A = 60/12 = 5, B = 60/15 = 4, C = 60/20 = 3. \nLet the total time taken be 'x' days. \nA worked for (x - 2) days, B worked for x days, C worked for x days. \nTotal work = 5*(x - 2) + 4*x + 3*x = 60 \n5x - 10 + 7x = 60 \n12x = 70 => x = 70/12 = 5.83 days."
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
            answer: 2,
            explanation: "Pattern in COVET -> FRYHW: \nC + 3 = F \nO + 3 = R \nV + 3 = Y \nE + 3 = H \nT + 3 = W \nThe pattern is shifting each letter +3 positions. \nApplying to SHDUO: \nS(19)+3 = V(22) \nH(8)+3 = K(11) \nD(4)+3 = G(7) \nU(21)+3 = X(24) \nO(15)+3 = R(18) \nSo it is VKGXR."
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
      },
      {
        id: "blood-relations",
        title: "Blood Relations",
        concept: "Blood Relations covers questions where you are required to establish a relation between two members based on a chain of given relationships. Commonly tested styles are Pointing to a photograph, Family tree, and Coded relations.",
        tricks: [
          "**Family Tree Symbols:**\n- Square/Plus (+) = Male member\n- Circle/Minus (-) = Female member\n- Horizontal double line (=) = Married couple\n- Vertical line (|) = Generation gap\n- Horizontal single line (-) = Siblings",
          "**Approach:** Start from the last person in the chain (usually starting with 'my') and work backwards to establish the direct link."
        ],
        questions: [
          {
            id: "q1",
            text: "Pointing to a photograph of a boy, Suresh said, 'He is the son of the only son of my mother.' How is Suresh related to that boy?",
            options: ["Brother", "Uncle", "Cousin", "Father"],
            answer: 3,
            explanation: "Suresh says: 'my mother' -> Suresh's mother. \n'Only son of my mother' -> Suresh himself (since he is the only son). \n'Son of the only son...' -> Suresh's son. \nTherefore, Suresh is the father of the boy in the photograph."
          },
          {
            id: "q2",
            text: "If A + B means A is the brother of B; A - B means A is the sister of B; and A * B means A is the father of B. Which of the following means that C is the son of M?",
            options: ["M * N - C", "M * C - G", "M * C + N", "C + N * M"],
            answer: 2,
            explanation: "Let's check option 3 (M * C + N): \n- M * C means M is the father of C (+ or - gender not known yet). \n- C + N means C is the brother of N (meaning C is Male). \n- Combining both: M is the father of C, who is a male sibling. \nTherefore, C is the son of M."
          },
          {
            id: "q3",
            text: "Introducing a woman, Shashank said, 'She is the mother of the only daughter of my son.' How is the woman related to Shashank?",
            options: ["Daughter", "Daughter-in-law", "Sister", "Wife"],
            answer: 1,
            explanation: "Shashank's son -> Son. \n'Only daughter of my son' -> Shashank's granddaughter. \n'Mother of the only daughter of my son' -> Wife of Shashank's son. \nTherefore, the woman is Shashank's daughter-in-law."
          },
          {
            id: "q4",
            text: "Deepak has a brother Anil. Deepak is the son of Prem. Bimal is Prem's father. In terms of relationship, what is Anil to Bimal?",
            options: ["Grandson", "Son", "Grandfather", "Brother"],
            answer: 0,
            explanation: "Anil and Deepak are brothers. \nThey are sons of Prem. \nBimal is Prem's father (Grandfather of Deepak & Anil). \nTherefore, Anil is the grandson of Bimal."
          },
          {
            id: "q5",
            text: "A's mother is sister of B and daughter of C. D is the daughter of B and sister of E. How is C related to E?",
            options: ["Grandmother/Grandfather", "Aunt", "Father", "Mother"],
            answer: 0,
            explanation: "A's mother is the daughter of C. \nB is the sibling of A's mother, and also a child of C. \nD and E are children of B. \nSince C is the parent of B, C is the grandparent of B's children (D and E). \nTherefore, C is the Grandmother or Grandfather of E."
          }
        ]
      },
      {
        id: "syllogism",
        title: "Syllogism",
        concept: "Syllogism is a form of logical reasoning where a conclusion is drawn from two or three statements. We assume the statements to be 100% true, even if they deviate from real-world facts, and determine which conclusions logically follow.",
        tricks: [
          "**Venn Diagram Approach:**\nDraw circles representing the categories in the statements. Draw the most minimal overlapping diagram first (Basic diagram), then think of alternative overlaps (Possibility diagrams).",
          "**Rule of Complementary Pairs:**\nIf one conclusion is 'Some A are B' (Particular positive) and the other is 'No A is B' (Universal negative) and both are individually false, then the answer is **Either I or II follows**."
        ],
        questions: [
          {
            id: "q1",
            text: "Statements: I. All cups are plates. II. All plates are spoons.\nConclusions: I. All cups are spoons. II. Some spoons are plates.",
            options: ["Only conclusion I follows", "Only conclusion II follows", "Both I and II follow", "Neither I nor II follows"],
            answer: 2,
            explanation: "Statements: All cups (C) are plates (P). All plates (P) are spoons (S). \n- Since all C are P, and all P are S, the circle C lies entirely inside S. So, 'All cups are spoons' is TRUE. \n- Since all plates lie inside spoons, there is an overlap. So, 'Some spoons are plates' is also TRUE. \nTherefore, both I and II follow."
          },
          {
            id: "q2",
            text: "Statements: I. Some trees are papers. II. No paper is a pen.\nConclusions: I. Some trees are pens. II. No tree is a pen.",
            options: ["Only I follows", "Only II follows", "Either I or II follows", "Neither I nor II follows"],
            answer: 2,
            explanation: "Statements: Some trees (T) overlap with papers (PA). No paper (PA) overlaps with pens (PE). \n- Can T overlap with PE? Yes, in some diagrams, but not all. So 'Some trees are pens' is not definitely true. \n- Is 'No tree is a pen' always true? No, there is a possible overlap. \n- Since these are complementary statements ('Some' and 'No' with same subjects) and one must be true, the answer is Either I or II follows."
          },
          {
            id: "q3",
            text: "Statements: I. All dogs are cats. II. Some cats are tigers.\nConclusions: I. All dogs are tigers. II. Some tigers are dogs.",
            options: ["Only I follows", "Only II follows", "Both follow", "Neither follows"],
            answer: 3,
            explanation: "Statements: All dogs (D) are cats (C). Some cats (C) are tigers (T). \n- T only overlaps with C. It does not necessarily touch D. \n- Therefore, 'All dogs are tigers' is false. \n- 'Some tigers are dogs' is also false as there is no guaranteed overlap. \nNeither follows."
          },
          {
            id: "q4",
            text: "Statements: I. No hero is a coward. II. Some cowards are villagers.\nConclusions: I. Some villagers are not heroes. II. Some villagers are cowards.",
            options: ["Only I follows", "Only II follows", "Both follow", "Neither follows"],
            answer: 2,
            explanation: "Statements: No hero (H) overlaps with coward (C). Some cowards (C) overlap with villagers (V). \n- Villagers who are cowards can never be heroes (since H and C never touch). So 'Some villagers are not heroes' is definitely TRUE. \n- From II, 'Some villagers are cowards' is directly TRUE. \nBoth follow."
          },
          {
            id: "q5",
            text: "Statements: All cars are bikes. II. All bikes are trucks. III. All trucks are planes.\nConclusions: I. All cars are planes. II. Some planes are bikes.",
            options: ["Only I follows", "Only II follows", "Both follow", "Neither follows"],
            answer: 2,
            explanation: "All cars are inside bikes, bikes inside trucks, trucks inside planes. \n- Cars lie entirely inside planes. So, 'All cars are planes' is TRUE. \n- Bikes lie inside planes. So, 'Some planes are bikes' is TRUE. \nBoth follow."
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
      },
      {
        id: "active-passive",
        title: "Active and Passive Voice",
        concept: "Voice indicates whether the subject of the sentence performs the action (Active) or receives the action (Passive). During CGL exams, we convert active to passive sentences without changing their tense or core meaning.",
        tricks: [
          "**Basic Rule:** Object of active sentence becomes subject of passive sentence, and auxiliary verb is added according to tense. Subject is added using 'by'.\n- Simple Present: write -> is/am/are written\n- Present Continuous: is writing -> is/am/are being written\n- Past Simple: wrote -> was/were written\n- Present Perfect: has written -> has/have been written",
          "**Imperative Sentences:**\nActive: 'Shut the door' -> Passive: 'Let the door be shut' or 'You are ordered to shut the door'."
        ],
        questions: [
          {
            id: "q1",
            text: "Change to Passive: 'The chef prepared a delicious meal.'",
            options: [
              "A delicious meal was prepared by the chef.",
              "A delicious meal is prepared by the chef.",
              "A delicious meal had been prepared by the chef.",
              "A delicious meal was being prepared by the chef."
            ],
            answer: 0,
            explanation: "Active: Subject = The chef, Verb = prepared (Simple Past), Object = a delicious meal. \nPassive formula: Object + was/were + past participle + by + Subject. \nResult: 'A delicious meal was prepared by the chef.'"
          },
          {
            id: "q2",
            text: "Change to Passive: 'The children are flying kites.'",
            options: [
              "Kites were being flown by the children.",
              "Kites are flown by the children.",
              "Kites are being flown by the children.",
              "Kites have been flown by the children."
            ],
            answer: 2,
            explanation: "Active: are flying (Present Continuous). \nPassive formula: is/am/are + being + past participle (flown). \nResult: 'Kites are being flown by the children.'"
          },
          {
            id: "q3",
            text: "Change to Passive: 'Who wrote this beautiful poem?'",
            options: [
              "By whom was this beautiful poem written?",
              "By whom this beautiful poem was written?",
              "Who was written this beautiful poem?",
              "By whom has this beautiful poem been written?"
            ],
            answer: 0,
            explanation: "For 'Who' questions, passive starts with 'By whom'. \nSince 'wrote' is Simple Past, we use 'was/were + subject + past participle'. \nResult: 'By whom was this beautiful poem written?'"
          },
          {
            id: "q4",
            text: "Change to Passive: 'Post this letter.'",
            options: [
              "This letter should be post.",
              "Let this letter be posted.",
              "Let this letter posted.",
              "You are ordered to post this letter."
            ],
            answer: 1,
            explanation: "This is an imperative sentence. The standard conversion is: 'Let + Object + be + past participle'. \nResult: 'Let this letter be posted.'"
          },
          {
            id: "q5",
            text: "Change to Active: 'The matches have been won by our team.'",
            options: [
              "Our team has won the matches.",
              "Our team won the matches.",
              "Our team had won the matches.",
              "Our team is winning the matches."
            ],
            answer: 0,
            explanation: "Passive: 'have been won' (Present Perfect passive). \nActive Subject = Our team (singular, so we use 'has'), Active Verb = has won, Object = the matches. \nResult: 'Our team has won the matches.'"
          }
        ]
      },
      {
        id: "idioms-phrases",
        title: "Idioms & Phrases",
        concept: "Idioms & Phrases are figurative expressions whose meanings cannot be understood literally from the individual words. SSC CGL tests idioms frequently in matching, sentence completion, and error spotting.",
        tricks: [
          "**Visual Memory:** Try to associate the origin or story behind the idiom (e.g. 'Bite the bullet' comes from historical battlefield surgeries).",
          "**Context Clues:** Read sentences containing the idiom to infer positive, negative, or neutral tones."
        ],
        questions: [
          {
            id: "q1",
            text: "What is the meaning of the idiom: 'Bite the bullet'?",
            options: [
              "To make a quick decision.",
              "To face a difficult situation with courage.",
              "To react aggressively to failure.",
              "To indulge in an expensive hobby."
            ],
            answer: 1,
            explanation: "'Bite the bullet' means to face a painful or extremely difficult situation with fortitude and courage. Historically, wounded soldiers bit on lead bullets to cope with pain during surgeries."
          },
          {
            id: "q2",
            text: "What is the meaning of the idiom: 'At the eleventh hour'?",
            options: [
              "At midnight.",
              "Too early in the morning.",
              "At the very last moment.",
              "Exactly on time."
            ],
            answer: 2,
            explanation: "'At the eleventh hour' means at the very last moment or just before it's too late."
          },
          {
            id: "q3",
            text: "What is the meaning of: 'To spill the beans'?",
            options: [
              "To waste food.",
              "To perform a clumsy act.",
              "To reveal a secret prematurely.",
              "To make an honest confession."
            ],
            answer: 2,
            explanation: "'To spill the beans' means to reveal secret information accidentally or prematurely."
          },
          {
            id: "q4",
            text: "Identify the correct meaning of: 'Burning the candle at both ends'?",
            options: [
              "Wasting money carelessly.",
              "Working extremely hard day and night.",
              "Creating conflict between two parties.",
              "Living a very luxurious life."
            ],
            answer: 1,
            explanation: "'Burning the candle at both ends' means exhausting oneself by working too hard, waking up early, and sleeping late."
          },
          {
            id: "q5",
            text: "What is the meaning of: 'A blessing in disguise'?",
            options: [
              "An event that seems bad at first but results in something good.",
              "A hidden warning about future danger.",
              "Receiving praise from an unexpected enemy.",
              "A reward given for minor achievements."
            ],
            answer: 0,
            explanation: "'A blessing in disguise' is something that appears unfortunate at first but later turns out to be highly beneficial."
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
      },
      {
        id: "indian-history",
        title: "Indian History",
        concept: "Indian History is divided into Ancient, Medieval, and Modern periods. CGL heavily tests Harappan Civilization, Maurya/Gupta empires, Delhi Sultanate, Mughal empire, and the Indian Freedom Struggle (1857-1947).",
        tricks: [
          "**Delhi Sultanate Dynasties Chronology (Mnemonic):**\n**S**ab **K**hao **T**amatar **L**al **S**e -> **S**lave, **K**hilji, **T**ughlaq, **S**ayyid, **L**odi.",
          "**Mughal Emperors Chronology (Mnemonic):**\n**BHAJSA** -> **B**abur, **H**umayun, **A**kbar, **J**ahangir, **S**hah Jahan, **A**urangzeb."
        ],
        questions: [
          {
            id: "q1",
            text: "Who was the founder of the Maurya Empire in India?",
            options: ["Ashoka", "Chandragupta Maurya", "Bindusara", "Harsha"],
            answer: 1,
            explanation: "Chandragupta Maurya founded the Maurya Empire in 322 BCE after defeating Dhana Nanda of the Nanda dynasty, with the assistance and guidance of Chanakya (Kautilya)."
          },
          {
            id: "q2",
            text: "The first battle of Panipat was fought in the year 1526 between Babur and whom?",
            options: ["Sher Shah Suri", "Ibrahim Lodi", "Hem Chandra Vikramaditya", "Rana Sanga"],
            answer: 1,
            explanation: "The First Battle of Panipat was fought on 21 April 1526 between Babur (invader) and Ibrahim Lodi (Sultan of Delhi). Babur won, establishing the Mughal Empire in India."
          },
          {
            id: "q3",
            text: "Which Governor-General of India abolished the practice of Sati in 1829?",
            options: ["Lord Dalhousie", "Lord William Bentinck", "Lord Canning", "Lord Warren Hastings"],
            answer: 1,
            explanation: "Lord William Bentinck, with the tireless support of social reformer Raja Ram Mohan Roy, passed the Sati Regulation Act in December 1829, making Sati illegal and punishable."
          },
          {
            id: "q4",
            text: "The famous Indus Valley Civilization site 'Mohan-jo-daro' is situated on the banks of which river?",
            options: ["Ravi", "Indus", "Sutlej", "Ghaggar"],
            answer: 1,
            explanation: "Mohan-jo-daro is located in Sindh, Pakistan on the right bank of the Indus River. (Harappa is situated on the bank of the Ravi river)."
          },
          {
            id: "q5",
            text: "Who was the founder of the Indian National Congress (INC) in 1885?",
            options: ["Allan Octavian Hume", "Dadabhai Naoroji", "Womesh Chandra Bonnerjee", "Dinshaw Wacha"],
            answer: 0,
            explanation: "Allan Octavian Hume (A.O. Hume), a retired British civil servant, was the primary founder and organizer of the Indian National Congress in December 1885. W.C. Bonnerjee was its first president."
          }
        ]
      },
      {
        id: "general-science",
        title: "General Science (Biology)",
        concept: "Biology is a high-yielding General Awareness topic. It covers cell structure, human anatomy, diseases & pathogens, plant kingdoms, genetics, and vitamins.",
        tricks: [
          "**Vitamin Deficiency Diseases:**\n- Vitamin A: Night Blindness\n- Vitamin B1: Beriberi\n- Vitamin C: Scurvy\n- Vitamin D: Rickets\n- Vitamin K: Non-clotting of blood",
          "**Mitochondria** is known as the 'Powerhouse of the Cell', and **Lysosomes** are known as the 'Suicidal bags of the cell'."
        ],
        questions: [
          {
            id: "q1",
            text: "Which organelle is commonly referred to as the 'Powerhouse of the Cell'?",
            options: ["Golgi Apparatus", "Lysosome", "Mitochondrion", "Ribosome"],
            answer: 2,
            explanation: "Mitochondria are known as the 'powerhouse of the cell' because they generate most of the cell's supply of adenosine triphosphate (ATP), used as a source of chemical energy."
          },
          {
            id: "q2",
            text: "Scurvy is caused due to the deficiency of which vitamin?",
            options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
            answer: 2,
            explanation: "Scurvy is a disease resulting from a lack of Vitamin C (ascorbic acid). Symptoms include bleeding gums, weakness, and skin spots."
          },
          {
            id: "q3",
            text: "Which blood group is known as the 'Universal Donor'?",
            options: ["Group AB+", "Group O-", "Group A-", "Group B+"],
            answer: 1,
            explanation: "Blood group O Negative (O-) is considered the universal donor because its red blood cells do not have A, B, or Rh antigens on their surface, making it safe to transfuse to any recipient."
          },
          {
            id: "q4",
            text: "In the human body, where is bile juice produced and where is it stored?",
            options: [
              "Produced in Stomach, stored in Pancreas",
              "Produced in Liver, stored in Gallbladder",
              "Produced in Gallbladder, stored in Liver",
              "Produced in Pancreas, stored in Stomach"
            ],
            answer: 1,
            explanation: "Bile juice, which helps in the digestion of fats, is produced/secreted by the Liver and stored in the Gallbladder."
          },
          {
            id: "q5",
            text: "Which disease is caused by the bite of an infected female Anopheles mosquito?",
            options: ["Dengue", "Malaria", "Chikungunya", "Yellow Fever"],
            answer: 1,
            explanation: "Malaria is caused by Plasmodium parasites, which are transmitted to humans through the bite of an infected female Anopheles mosquito. (Dengue is transmitted by female Aedes mosquitoes)."
          }
        ]
      }
    ]
  }
};
