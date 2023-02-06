// JSON.parse(json)
module.exports = {
    json: {
    "title": "Prediction of Coercive Measures",
    "description": "Early prevention of coercion in adult psychiatry based on machine learning",
    "logoPosition": "right",
    "logoWidth": 200,
    "logoHeight": 100,
    "showQuestionNumbers": "off",
    "showProgressBar": "top",
    "progressBarType": "buttons",
    "showCompletedPage": "false",
    pages: [
      {
        name: "PatientID", elements: [
           {
            "type": "panel",
            "name": "patient_information",
            //"startWithNewLine": false,
            "elements": [
              {
                "type": "text",
                "name": "pid",
                "title": "Please enter the patient ID",
                "inputType": "number",
                "isRequired": "true"
              },
              {
                "type": "text",
                "name": "ein_dat",
                "title": "Admission date",
                "inputType": "date"
          }
            ],
            "title": "Subject of the test",
            "showNumber": true,
            "showQuestionNumbers": "off"
          },
            
           {
            "type": "panel",
            "name": "data_collector_information",
            "startWithNewLine": false,
            "elements": [
              {
                "type": "text",
                "name": "clinician",
                "title": "Name of clinician"
              },
              {
                "type": "text",
                "name": "department",
                "title": "Department"
              },
            ],
            "title": "User and department Information",
            "showNumber": true,
            "showQuestionNumbers": "off"
          }
        ],
        navigationTitle: "Patient ID",
        navigationDescription: "Enter patient ID",
      },
      {
        title: "HoNOS data",
        navigationTitle: "HoNOS",
        navigationDescription: "Symptoms scale",
        description: "Scales measuring behaviour, impairment, symptoms and social functioning, taken at entry. (Source: British Journal of Psychiatry (1999)).",
        elements: [{
          name: "h1",
          description: "Include such behaviour due to any cause (e.g. drugs, alcohol, dementia, psychosis, etc...). Do not include bizarre behaviour rated at Scale 6.",
          title: "Scale 1 - Overactive, aggressive, distruptive or agitated behaviour",
          type: "radiogroup",
          choices: [
            { value: 0, text: "0 - No problem of this kind during the period rated" },
            { value: 1, text: "1 - Irritability, quarrels, restlessness etc. not requiring action. " },
            { value: 2, text: "2 - Includes aggressive gestures, pushing or pestering others; threats or verbal aggression; lesser damage to property (e.g. a broken cup or window); marked overactivity or agitation." },
            { value: 3, text: "3 - Physically aggressive to others or animals (short of Rating 4); threatening manner; more serious overactivity or destruction of property" },
            { value: 4, text: "4 - At least one serious physical attack on others or on animals; destructive of property (e.g. fire-setting); serious intimidation or obscene behaviour." },
        //    { value: 9, text: "9 - Unkown" }
          ],
          isRequired: false
        },
        {
          name: "h2",
          title: "Scale 2 - Non-accidental self-injury",
          description: "Do not include accidental self-injury (due e.g. to dementia or severe learning disability); the cognitive problem is rated at Scale 4 and the injury at Scale 5. Do not include illness or injury as a direct consequence of drug/alcohol use rated at Scale 3 (e.g. cirrhosis of the liver or an injury resulting from drink-driving are rated at Scale 5).",
          type: "radiogroup",
          choices: [
            { value: 0, text: "0 - No problem of this kind during the period rated" },
            { value: 1, text: "1 - Fleeting thoughts about ending it all, but little risk during the period rated; no self-harm " },
            { value: 2, text: "2 - Mild risk during the period rated; includes non-hazardous self-harm (e.g. wrist-scratching). " },
            { value: 3, text: "3 - Moderate to serious risk of deliberate self-harm during the period rated; includes preparatory acts (e.g. collecting tablets). " },
            { value: 4, text: "4 - Serious suicidal attempt and/or serious deliberate self-injury during the period rated" },
         //   { value: 9, text: "9 - Unkown" }
          ],
          isRequired: false
        },
        {
          name: "h3",
          title: "Scale 3 - Problem-drinking or drug-taking",
          description: "Do not include aggressive/destructive behaviour due to alcohol or drug use, rated at Scale 1. Do not indude physical illness or disability due to alcohol or drug use, rated at Scale 5.",
          type: "radiogroup",
          choices: [
            { value: 0, text: "0 - No problem of this kind during the period rated" },
            { value: 1, text: "1 - Some over-indulgence, but within social norm.  " },
            { value: 2, text: "2 - Loss of control of drinking or drugtaking, but not seriously addicted " },
            { value: 3, text: "3 - Marked craving or dependence on alcohol or drugs with frequent loss of control; risk taking under the influence. " },
            { value: 4, text: "4 - Incapacitated by alcohol/drug problems." },
          //  { value: 9, text: "9 - Unkown" }
          ],
          isRequired: false
        },
        {
          name: "h4",
          title: "Scale 4 - Cognitive problems",
          description: "Include problems of memory, orientation and understanding associated with any disorder: learning disability, dementia, schizophrenia, etc. Do not include temporary problems (e.g. hangovers) resulting from drug/alcohol use, rated as Scale 3. ",
          type: "radiogroup",
          choices: [
            { value: 0, text: "0 - No problem of this kind during the period rated" },
            { value: 1, text: "1 - Minor problems with memory or understanding (e.g. forgets names occasionally). " },
            { value: 2, text: "2 -  Mild but definite problem (e.g. has lost the way in a familiar place or failed to recognise a familiar person); sometimes mixed up about simple decisions.  " },
            { value: 3, text: "3 - Marked disorientation in time, place or person; bewildered by everyday events; speech is sometimes incoherent; mental slowing." },
            { value: 4, text: "4 - Severe disorientation (e.g. unable to recognise relatives); at risk of accidents; speech incomprehensible; clouding or stupor. " },
          //  { value: 9, text: "9 - Unkown" }
          ],
          isRequired: false
        },
        {
          name: "h5",
          title: "Scale 5 - Physical illness or disability problems",
          description: "Indude illness or disability from any cause that limits or prevents movement, or impairs sight or hearing, or otherwise interferes with personal functioning. Include side-effects from medication; effects of drug/alcohol use; physical disabilities resulting from accidents or self-harm associated with cognitive problems, drunk driving, etc. Do not include mental or behavioural problems rated at Scale 4.   ",
          type: "radiogroup",
          choices: [
            { value: 0, text: "0 - No physical health problem during the period rated" },
            { value: 1, text: "1 - Minor health problems during the period (e.g. cold, non-serious fall, etc.). " },
            { value: 2, text: "2 - Physical health problem imposes mild restriction on mobility and activity.  " },
            { value: 3, text: "3 - Moderate degree of restriction on activity due to a physical health problem." },
            { value: 4, text: "4 - Severe or complete incapacity due to a physical health problem. " },
         //   { value: 9, text: "9 - Unkown" }
          ],
          isRequired: false
        },
        {
          name: "h6",
          title: "Scale 6 - Problems associated with hallucinations and delusions",
          type: "radiogroup",
          description: "Include hallucinations and delusions irrespective of diagnosis. Include odd and bizarre behaviour associated with hallucinations or delusions. Do not include aggressive, destructive or overactive behaviours attributed to hallucinations or delusions, rated at Scale 1",
          choices: [
            { value: 0, text: "0 - No evidence of hallucinations or delusions during the period rated. " },
            { value: 1, text: "1 - Somewhat odd or eccentric beliefs not in keeping with cultural norms " },
            { value: 2, text: "2 - Delusions or hallucinations (e.g. voices, visions) are present, but there is little distress to patient or manifestation in bizarre behaviour, i.e. clinically present, but mild " },
            { value: 3, text: "3 - Marked preoccupation with delusions or hallucinations, causing much distress and/or manifested in obviously bizarre behaviour, i.e. a moderately severe clinical problem" },
            { value: 4, text: "4 - Mental state and behaviour is seriously and adversely affected by delusions or hallucinations, with severe impact on patient.  " },
          //  { value: 9, text: "9 - Unkown" }
          ],
          isRequired: false
        },
        {
          name: "h7",
          title: "Scale 7 - Problems with depressed mood",
          type: "radiogroup",
          description: "Do not indude overactivity or agitation, rated at Scale 1. Do not include suicidal ideation or attempts, rated at Scale 2. Do not include delusions or hallucinations, rated at Scale 6.",
          choices: [
            { value: 0, text: "0 - No problem associated with depressed mood during the period rated. " },
            { value: 1, text: "1 - Gloomy; or minor changes in mood.  " },
            { value: 2, text: "2 - Mild but definite depression and distress (e.g. feelings of guilt; loss of self-esteem).  " },
            { value: 3, text: "3 - Depression with inappropriate selfblame; preoccupied with feelings of guilt." },
            { value: 4, text: "4 - Severe or very severe depression, with guilt or self-accusation  " },
          //  { value: 9, text: "9 - Unkown" }
          ],
          isRequired: false
        },
        {
          name: "h8",
          title: "Scale 8 - Other mental and behavioural problems",
          type: "radiogroup",
          description: "Rate only the most severe clinical problem not considered at Items 6 and 7. Type of problem : phobic, anxiety, obsessive-compulsive, mental strain/tension, dissociative, somatoform, eating, sleep, sexual, other.",
          choices: [
            { value: 0, text: "0 - No evidence of any of these problems during period rated. " },
            { value: 1, text: "1 - Minor problems only" },
            { value: 2, text: "2 - A problem is clinically present at a mild level (e.g. patient has a degree of control).   " },
            { value: 3, text: "3 - Occasional severe attack or distress, with loss of control (e.g. has to avoid anxiety-provoking situations altogether, call in a neighbour to help, etc.) i.e. a moderately severe level of problem. " },
            { value: 4, text: "4 - Severe problem dominates most activities. " },
          //  { value: 9, text: "9 - Unkown" }
          ],
          isRequired: false
        },
        {
          name: "h9",
          title: "Scale 9 - Problems with relationships",
          type: "radiogroup",
          description: "Rate the patient's most severe problem associated with active or passive withdrawal from social relationships, and/or nonsupportive, destructive or self-damaging relationships",
          choices: [
            { value: 0, text: "0 - No significant problem during the period rated. " },
            { value: 1, text: "1 - Minor non-clinical problems. " },
            { value: 2, text: "2 - Definite problem in making or sustaining supportive relationships: patient complains and/or problems are evident to others.  " },
            { value: 3, text: "3 - Persisting major problem due to active or passive withdrawal from social relationships and/or to relationships that provide little or no comfort or support.  " },
            { value: 4, text: "4 - Severe and distressing social isolation due to inability to communicate socially and/or withdrawal from social relationships. " },
          //  { value: 9, text: "9 - Unkown" }
          ],
          isRequired: false
        },
        {
          name: "h10",
          title: "Scale 10 - Problems with activities of daily living ",
          type: "radiogroup",
          description: "Rate the overall level of functioning in activities of daily living (ADL) (e.g. problems with basic activities of self-care such as eating, washing, dressing, toilet; also complex skills such as budgeting, organising where to live, occupation and recreation, mobility and use of transport, shopping, self-development, etc.). Include any lack of motivation for using self-help opportunities, since this contributes to a lower overall level of functioning. Do not indude lack of opportunities for exercising intact abilities and skills, rated at Scales 11-12 ",
          choices: [
            { value: 0, text: "0 - No problem during period rated; good ability to function in all areas.  " },
            { value: 1, text: "1 - Minor problems only (e.g. untidy, disorganised).  " },
            { value: 2, text: "2 - Self-care adequate, but major lack of performance of one or more complex skills " },
            { value: 3, text: "3 - Major problem in one or more areas of self-care (eating, washing, dressing, toilet) as well as major inability to perform several complex skills. " },
            { value: 4, text: "4 - Severe disability or incapacity in all or nearly all areas of self-care and complex skills. " },
          //  { value: 9, text: "9 - Unkown" }
          // //"logo": "https://i.postimg.cc/7ZTbvV7R/logo.png",  // to fix
          ],
          isRequired: false
        },
        {
          name: "h11",
          title: "Scale 11 - Problems with living conditions ",
          type: "radiogroup",
          description: "Rate the overall severity of problems with the quality of living conditions and daily domestic routine. Are the basic necessities met (heat, light, hygiene)? If so, is there help to cope with disabilities and a choice of opportunities to use skills and develop new ones? Do not rate the level of functional disability itself, rated at Scale 10.  ",
          choices: [
            { value: 0, text: "0 - Accommodation and living conditions are acceptable;" },
            { value: 1, text: "1 - Accommodation is reasonably acceptable although there are minor or transient problems (e.g. not ideal location, not preferred option, doesn't like the food, etc.).  " },
            { value: 2, text: "2 - Significant problem with one or more aspects of the accommodation and/or regime (e.g. restricted choice; staff or household have little understanding of how to help use or develop new or intact skills)." },
            { value: 3, text: "3 - Distressing multiple problems with accommodation (e.g. some basic necessities absent); housing environment has minimal or no facilities to improve patient's independence" },
            { value: 4, text: "4 - Accommodation is unnacceptable (e.g. lack of basic necessities, patient is at risk of eviction, or roofless, or living conditions are otherwise intolerable) making patient's problems worse." },
          //  { value: 9, text: "9 - Unkown" }
          ],
          isRequired: false
        },
        {
          name: "h12",
          title: "Scale 12 - Problems with occupation and activities",
          type: "radiogroup",
          description: "Rate the overall level of problems with quality of day-time environment. Is there help to cope with disabilities, and opportunities for maintaining or improving occupational and reaeational skills and activities? Consider factors such as stigma, lack of qualified staff, access to supportive facilities (e.g. staffing and equipment of day centres, workshops, social clubs, etc.). Do not rate the level of functional disability itself, rated at Scale 10",
          choices: [
            { value: 0, text: "0 - Patient's day-time environment is acceptable" },
            { value: 1, text: "1 - Minor or temporary problems (e.g. late cheques): reasonable facilities available but not always at desired times, etc.  " },
            { value: 2, text: "2 - Limited choice of activities; lack of reasonable tolerance (e.g. unfairly refused entry to public library or baths, etc.); handicapped by lack of a permanent address; insufficient carer or professional support; helpful day setting available but for very limited hours" },
            { value: 3, text: "3 - Marked deficiency in skilled services available to help minimise level of existing disability; no opportunities to use intact skills or add new ones; unskilled care difficult to access" },
            { value: 4, text: "4 - Lack of any opportunities for daytime activities makes patient's problems worse" },
           // { value: 9, text: "9 - Unkown" }
          ],
          isRequired: false
        }
        ]
      },
      {
        name: "Social data",
        title: "Social data",
        navigationTitle: "Social data",
        navigationDescription: "Gender, age and backround",
        elements: [
          {
            "type": "panel",
            "name": "basic",
              "elements": [ {
                "type": "boolean",
                "name": "geschl",
                "title": "Gender:",
                "isRequired": true,
                "labelTrue": "Female",
                "labelFalse": "Male",
              },
              {
              "type": "text",
              "name": "alter",
              "title": "Age:",
              "startWithNewLine": false,
              "isRequired": true,
              "inputType": "number"
              }]
          },
          {
            "type": "radiogroup",
            "name": "bildung",
            "title": "Educational backround :",
            "colCount": 2,
            "isRequired": false,
            "choices": [
              { value: 1, text: "No school education" },
              { value: 2, text: "Obligatory school" },
              { value: 3, text: "Apprenticeship"},
              { value: 4, text: "Matura" },
              { value: 5, text: "Higher professional/specialized school" },
              { value: 6, text: "University" },
             // { value: 9, text: "Unknown" },
            ],
          },
          {
            "type": "radiogroup",
            "name": "zivilstand",
            "title": "Civil status prior to admission :",
            "colCount": 2,
            //"startWithNewLine": false,
            "isRequired": false,
            "choices": [
              { value: 1, text: "Single" },
              { value: 2, text: "Married, living together" },
              { value: 3, text: "Married, living separated" },
              { value: 4, text: "Widowed" },
              { value: 5, text: "Divorced" },
             // { value: 9, text: "Unknown" },
            ],
          },
          {
            "type": "checkbox",
            "name": "besch",
            "title": "Employment status prior to admission (multiple may apply):",
            "colCount": 2,
            "isRequired": true,
            "choices": [
              { value: 0, text: "In full-time employement"},
              { value: 1, text: "In part-time employement"},
              { value: 2, text: "Works at home"},
              { value: 3, text: "Following an education"},
              { value: 4, text: "In rehabilitation"},
              { value: 5, text: "Protected workplace"},
              { value: 6, text: "On disability"},
              { value: 7, text: "Does not have an occupation"},
             // { value: 9, text: "Unknown"}
            ],
          },
        ],
      },
      {
          name: "Admission data",
          title: "Admission data",
          navigationTitle: "Admission data",
          navigationDescription: "Prior context",
          elements: [
            {
              "type": "boolean",
              "colCount": 0,
              "name": "ffe",
              "title": "Has the patient been hospitalized by force?",
              "labelTrue": "Yes",
              "labelFalse": "No",
              "hideNumber": true,
              "isRequired": true,
            },
            {
              "type": "radiogroup",
              "name": "ort_v_ein",
              "title": "Location prior to admission:",
              "colCount": 2,
              "isRequired": false,
              "choices": [
                { value:0, text: "At home"},
                { value:1, text: "At home with SPITEX assistance"},
                { value:2, text: "Care/nursing home"},
                { value:3, text: "Other social-medical institution"},
                { value:4, text: "Psychiatric clinic, other institution"},
                { value:5, text: "Psychiatric department/clinic, same institution"},
                { value:6, text: "Other hopital"},
                { value:7, text: "Acute care ward, same institution"},
                { value:8, text: "Correctional facilitiy"},
                { value:9, text: "Other"},
                { value:10, text: "Rehabilitation clinic, other institution"},
                { value:11, text: "Rehabilitation department/clinic, same institution"},
               // { value:12, text: "Unknown"},
              ],
            },
            {
              "type": "radiogroup",
              "name": "ein_art",
              "title": "Admission detail:",
              "colCount": 2,
              "isRequired": false,
              "choices": [
                { value:1, text: "Emergency"},
                { value:2, text: "Announced, planned"},
                { value:3, text: "Child birth"},
                { value:4, text: "Internal transfer"},
                { value:5, text: "Transfered within 24h"},
                { value:8, text: "Other"},
              //  { value:9, text: "Unknown"},
              ],
            },
            {
              "type": "radiogroup",
              "name": "einw_inst",
              "title": "Referral authority:",
              "colCount": 2,
              "isRequired": false,
              "choices": [
                { value:1, text: "His/herself / relatives"},
                { value:2, text: "Rescue services"},
                { value:3, text: "Doctor"},
                { value:4, text: "Non-medical therapist"},
                { value:5, text: "Social/medical service"},
                { value:6, text: "Justice authorities"},
                { value:8, text: "Other"},
             //   { value:9, text: "Unknown"},
              ],
            },
          ]
      },
      {
          name: "Medical and dropout data",
          title: "Medical and dropout data",
          navigationTitle: "Medical & Dropout data",
          navigationDescription: "Diagnosis, grounds for dropout",
          elements: [
            {
                "type": "radiogroup",
                "name": "hpt_diagn_num",
                "title": "Main diagnosis:",
                "colCount": 1,
                "isRequired": true,
                "choices": [
                  { value:0, text: "F0: Organic, including symptomatic, mental disorders"},
                  { value:1, text: "F1: Mental and behavioural disorders due to use of psychoactive substances"},
                  { value:2, text: "F2: Schizophrenia, schizotypal and delusional disorders"},
                  { value:3, text: "F3: Mood [affective] disorders"},
                  { value:4, text: "F4: Neurotic, stress-related and somatoform disorders"},
                  { value:5, text: "F5: Behavioural syndromes associated with physiological disturbances and physical factors"},
                  { value:6, text: "F6: Disorders of personality and behaviour in adult persons"},
                  { value:7, text: "F7: Mental retardation"},
                  { value:8, text: "F8: Disorders of psychological development"},
                  { value:9, text: "F9: Behavioural and emotional disorders with onset usually occurring in childhood and adolescence"},
                  { value:10, text: "F99 - Unspecified mental disorders"},
                  { value:11, text: "Other medical main diagnosis"},
                ],
              
            },
            {
              "type": "radiogroup",
              "name": "dropout_pb_ein",
              "title": "Dropout BSCL:",
              "colCount": 2,
              "isRequired": false,
              "choices": [
                { value:0, text: "No dropout"},
                { value:1, text: "Patient refusal"},
                { value:2, text: "Language issues"},
                { value:3, text: "Too ill"},
                { value:4, text: "Deceased"},
                { value:6, text: "Discharged within 7 days"},
                { value:7, text: "Unplanned discharge"},
              //  { value:9, text: "Unknown"},
              ],
            },
            /*{
              "type": "radiogroup",
              "name": "dropout_ph_ein",
              "title": "Dropout HoNOS:",
              "startWithNewLine": false,
              "colCount": 1,
              "isRequired": false,
              "choices": [
                { value:0, text: "No dropout"},
                { value:1, text: "Discharged within 7 days"},
                { value:2, text: "Other"},
              //  { value:9, text: "Unknown"},
              ],
            }, */
          ]
      },
      {
          
          name: "Clinic data",
          title: "Clinic data",
          navigationTitle: "Clinic profiling",
          navigationDescription: "Type of clinic",
          elements: [
            {
         //   "type": "panel",
         //   "name": "clinic_profile",
         //   "elements": [ {
          
              "type": "rating",
              "name": "home_scale",
              "minRateDescription": "",
              "maxRateDescription": "",
              "title": "Perentage of patients whose prior location was home",
              "colCount": 0,
              "isRequired": true,
              "rateValues": [
                { value:0, text: "At least 80%"},
                { value:1, text: "80% to 60%"},
                { value:2, text: "At most 60%"},
              ],
            },
            {  
              "type": "rating",
              "name": "urgent",
              "title": "Perentage of urgent admissions",
              "colCount": 0,
              "minRateDescription": "",
              "maxRateDescription": "",
              "startWithNewLine": false,
              "isRequired": true,
              "rateValues": [
                { value:0, text: "At most 25%"},
                { value:1, text: "25% to 50%"},
                { value:2, text: "At least 50%"},
              ],
          //  },
         
            //]
           },    
           {
            "type": "boolean",
            "name": "F2_scale",
            "title": "Does the clinics has at least 20% of patients with F2 as a main diagnosis",
            "isRequired": true,
            "labelTrue": "Yes",
            "labelFalse": "No",
            "hideNumber": true,
            "colCount": 1
          }, 
            { 
              "type": "boolean",
              "name": "prevFM",
              "title": "Has the patient already been admitted to the clinic in the past 6 months ?",
              "isRequired": false,
              "labelTrue": "Yes",
              "labelFalse": "No",
              "hideNumber": true,
              "colCount": 1
            },
            {
              "type": "rating",
              "name": "fm_sum",
              "title": "Was the patient subject to a coercive measure during his previous admissions ? ",
              "minRateDescription": "No / Unknown",
              "maxRateDescription": "During 3 or more admissions",
              "visibleIf": "{prevFM}='true'",
              "isRequired": false,
              "rateValues": [
                { value:0, text: "0"},
                { value:1, text: "1"},
                { value:2, text: "2"},
                { value:3, text: "3"},
              ],
            },
            {
              type: "comment",
              name: "comment",
              title: "Comments regarding the current case"
            }
          ]
      }
    ]
  }
}