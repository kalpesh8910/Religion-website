/**
 * Mantras, religions, ṛṣi vaṃśa, and photos. Mantra "id" → mantras.html#slug; rishi "id" → rishi-vansh.html#slug
 *
 * Bilingual detail (Hindi + Gujarati side by side):
 * - Put Hindi/Devanagari in "text" (or dedicated "text_hi").
 * - Put Gujarati in "text_gu".
 * - Meanings: "translation" / "translation_hi" and "translation_gu".
 *
 * Mantro menu label: optional "mantro_title" (and "mantro_title_gu").
 */
window.SITE_DATA = {
  mantras: [
    {
      id: "hanumanji",
      title: "Hanumanji Mantra",
      title_gu: "હનુમાનજી મંત્ર",
      text: "ॐ राम रामाय रामचंद्राय नमो हनुमंतें\nभय भंजनाय सुखं कुरु फट् स्वाहा ॥",
      text_gu: "ૐ રામ રામાય રામચંદ્રાય નમો હનુમંતે\nભય ભંજનાય સુખમ્ કુરુ ફટ સ્વાહા ॥",
      translation: "Om — salutations to Hanuman through Rama and Ramachandra; to the destroyer of fear, grant wellbeing — phaṭ svāhā.",
      translation_gu: "ૐ — રામ અને રામચંદ્ર દ્વારા હનુમાનને નમો; ભય ભંજનને સુખ આપો — ફટ સ્વાહા.",
      notes_gu:
        "હનુમાનજીનો પરિવાર\nમંત્ર: ૐ રામ રામાય રામચંદ્રાય નમો હનુમંતે ભય ભંજનાય સુખમ્ કુરુ ફટ સ્વાહા ॥\nમાતા: અંજના, નિહારિકા\nપિતા: કેસરીનંદન, પવનદેવ\nનામ: વ્રજેશ, બજરંગ, હનુમાન\nગુરુ: સૂર્યદેવ\nપત્ની: સુવર્ચલા\nપુત્ર: મકરધ્વજ\nભાઈઓ: મતિમાન, શ્રુતિમાન, કેતુમાન, ગતિમાન અને ધૃતિમાન",
      language: "Sanskrit",
      language_gu: "સંસ્કૃત / ગુજરાતી",
      religion: "Hinduism",
      religion_gu: "હિન્દુ ધર્મ"
    },
    {
      id: "deep-jyoti-mantra",
      title: "Deepa Jyoti Mantra (lamp prayer)",
      title_gu: "દીપ જ્યોતિ મંત્ર",
      text: "शुभं करोतु कल्याणम्, आरोग्यं धनसंपदः ।\nशत्रुबुद्धि विनाशाय, दीपज्योतिर्नमोस्तु ते ॥\nदीप ज्योतिः परब्रह्म, दीपज्योतिर्जनार्दनः ।\nदीपो हरतु मे पापं, दीपज्योतिर्नमोस्तु ते ॥",
      text_gu: "શુભં કરોતુ કલ્યાણં, આરોગ્યં ધનસંપદઃ ।\nશત્રુબુદ્ધિ વિનાશાય, દીપજ્યોતિ નમોસ્તુ તે ॥\nદીપ જ્યોતિઃ પરબ્રહ્મ, દીપજ્યોતિ જનાર્દનઃ ।\nદીપો હરતુ મે પાપં, દીપજ્યોતિ નમોસ્તુ તે ॥",
      translation: "By reciting this while lighting a lamp, welfare comes in this world and the next. May it bring auspiciousness, health, and prosperity. For the destruction of hostile thoughts, salutations to the lamp’s light. The lamp-flame is the Supreme Brahman and Janardana. May the lamp remove my wrongdoings — salutations to that sacred light.",
      translation_gu: "દીવો કરી આ મંત્ર બોલવાથી આ લોક અને પરલોકમાં કલ્યાણ થાય છે. શુભ, આરોગ્ય અને ધનસંપત્તિ આવે. શત્રુ બુદ્ધિ (વૈરી વિચારો)નો વિનાશ થાય — દીપજ્યોતિને નમસ્કાર. દીવાની જ્યોતિ પરબ્રહ્મ અને જનાર્દન છે. દીવો મારા પાપ દૂર કરે — દીપજ્યોતિને નમસ્કાર.",
      language: "Sanskrit",
      language_gu: "સંસ્કૃત / ગુજરાતી",
      religion: "Hinduism",
      religion_gu: "હિન્દુ ધર્મ"
    },
    {
      id: "shiv-no-mantra",
      title: "Shiv no Mantra",
      title_gu: "શિવનો મંત્ર",
      text: "ॐ नमः शिवाय ॥\nॐ नमः शिवाय हर हर भोले नमः शिवाय ॥",
      text_gu: "ૐ નમઃ શિવાય ॥\nૐ નમઃ શિવાય હર હર ભોલે નમઃ શિવાય ॥",
      translation: "Om, salutations to Shiva. Om Namah Shivaya — Hara Hara Bhole Namah Shivaya (praise of Lord Shiva).",
      translation_gu: "ૐ, ભગવાન શિવને નમસ્કાર. ૐ નમઃ શિવાય — હર હર ભોલે નમઃ શિવાય.",
      language: "Hindi",
      language_gu: "ગુજરાતી / હિન્દી",
      religion: "Hinduism",
      religion_gu: "હિન્દુ ધર્મ"
    },
    {
      id: "karadarshan-mantra",
      title: "Morning mantra — viewing your hands (Karadarshana)",
      title_gu: "પ્રાતઃકાળે પથારીમાંથી ઊઠીને હાથનું દર્શન કરતા બોલવાનો મંત્ર",
      text: "कराग्रे वसते लक्ष्मीः करमूले सरस्वती ।\nकरमध्ये तु गोविंदः प्रभाते करदर्शनम् ॥",
      text_gu: "કરાગ્રે વસતે લક્ષ્મીઃ કરમૂલે સરસ્વતી ।\nકરમધ્યે તુ ગોવિંદઃ પ્રભાતે કરદર્શનમ્ ॥",
      translation: "Recite when you wake and look at your palms: Lakshmi at the fingertips, Saraswati at the base of the hands, Govinda in the centre — salutation at dawn (karadarshana).",
      translation_gu: "સવારે પથારીમાંથી ઊઠીને હાથ જોતા બોલવું: અંગુઠાના ટોચે લક્ષ્મી, હાથના મૂળમાં સરસ્વતી, મધ્યમાં ગોવિંદ — પ્રભાતે કરદર્શન.",
      language: "Sanskrit",
      language_gu: "સંસ્કૃત / ગુજરાતી",
      religion: "Hinduism",
      religion_gu: "હિન્દુ ધર્મ"
    },
    {
      id: "prithvi-vandan-mantra",
      title: "Mantra before stepping on the earth (Prithvi vandan)",
      title_gu: "જમીન પર પગ મૂકતા પહેલાં પૃથ્વીદેવીને વંદન મંત્ર",
      text: "समुद्रवसने देवि पर्वतस्तनमण्डले ।\nविष्णुपत्नि नमस्तुभ्यं पादस्पर्शं क्षमस्व मे ॥",
      text_gu: "સમુદ્રવસને દેવિ પર્વતસ્તનમંડલે ।\nવિષ્ણુપત્નિ નમસ્તુભ્યં પાદસ્પર્શ ક્ષમસ્વ મે ॥",
      translation: "Bow to Mother Earth before placing your feet on the ground: she who is clothed by oceans and whose breasts are the mountains — O consort of Vishnu, forgive the touch of my feet.",
      translation_gu: "જમીન પર પગ મૂકતા પહેલાં પૃથ્વી માંને વંદન: સમુદ્રથી ઢંકાયેલી, પર્વતો તેના સ્તન સમાન — હે વિષ્ણુપત્નિ, મારા પગના સ્પર્શની ક્ષમા કરજો.",
      language: "Sanskrit",
      language_gu: "સંસ્કૃત / ગુજરાતી",
      religion: "Hinduism",
      religion_gu: "હિન્દુ ધર્મ"
    },
    {
      id: "snan-purva-nadi-mantra",
      title: "Mantra before bathing (sacred rivers)",
      title_gu: "સ્નાન કરતા પહેલા બોલવાનો મંત્ર",
      text: "गंगे च यमुने देवि गोदावरि सरस्वति ।\nनर्मदे सिंधु कावेरी जलेऽस्मिन् संनिधिं कुरु ॥\n\nसात नदियों के नाम:\nगंगा, यमुना, नर्मदा, सरस्वती, गोदावरी, सिंधु, कावेरी।",
      text_gu: "ગંગે ચ યમુને દેવિ, ગોદાવરી સરસ્વતી ।\nનર્મદે સિંધુ કાવેરી, જલેસ્મિન્ સંનિધિ કુરુ ॥\n\nસાત નદીનાં નામ:\nગંગા, યમુના, નર્મદા, સરસ્વતી, ગોદાવરી, સિંધુ, કાવેરી।",
      translation: "Before bath, recite the verse invoking the sacred rivers. Names of the seven rivers: Ganga, Yamuna, Narmada, Saraswati, Godavari, Sindhu, Kaveri — may their presence sanctify this water.",
      translation_gu: "સ્નાન પહેલાં પવિત્ર નદીઓને સ્મરતો શ્લોક બોલો. સાત નદીનાં નામ: ગંગા, યમુના, નર્મદા, સરસ્વતી, ગોદાવરી, સિંધુ, કાવેરી — આ જળમાં તેમની સન્નિધિ રહે.",
      language: "Sanskrit",
      language_gu: "સંસ્કૃત / ગુજરાતી",
      religion: "Hinduism",
      religion_gu: "હિન્દુ ધર્મ"
    },
    {
      id: "surya-mantra",
      title: "Surya mantra (Sun)",
      title_gu: "સૂર્યનો મંત્ર",
      text: "आदिदेव नमस्तुभ्यं प्रसीद मम भास्कर ।\nदिवाकर नमस्तुभ्यं प्रभाकर नमोस्तुते ॥",
      text_gu: "આદિદેવ નમસ્તુભ્યં, પ્રસીદ મમ ભાસ્કર ।\nદિવાકર નમસ્તુભ્યં, પ્રભાકર નમોસ્તુતે ॥",
      translation: "Salutations to the primal deity, the Sun: be pleased with me, O Bhaskara. Salutations to Divakara and Prabhakara — obeisance to you.",
      translation_gu: "આદિ દેવ સૂર્યને નમસ્કાર; હે ભાસ્કર, મારા પર પ્રસન્ન રહો. હે દિવાકર અને પ્રભાકર, તમને નમસ્કાર.",
      notes_gu:
        "સૂર્ય દેવ નો પરિવાર\nપિતા નું નામ:- કશ્યપ ઋષિ\nમાતા નું નામ:- અદિતિ માતા\nપત્ની:- સંજ્ઞા(રાંદલ માતા),છાયા દેવી,અશ્વિની\nપુત્ર નું નામ:- યમ,શનિ,અશ્વિની કુમાર-૪\nસુગ્રીવ, કર્ણ \nપુત્રી ના નામ:- યમુના,ભદ્રા,કાલિંદી, સૂર્વચલા,તાપી \nસસરા નું નામ:- વિશ્વકર્મા\nસાસુ નું નામ:- વ્રોચના",
      language: "Sanskrit",
      language_gu: "સંસ્કૃત / ગુજરાતી",
      religion: "Hinduism",
      religion_gu: "હિન્દુ ધર્મ"
    },
    {
      id: "tulsi-mantra-shiv-sakhi",
      title: "Tulsi mantra (Shiva companion form)",
      title_gu: "તુલસી મંત્ર",
      text: "तुलसी श्रीसखी शिवे पापहारिणि पुण्यदे ।\nनमस्ते नारदनुते नमो नारायणप्रिये ॥",
      text_gu: "તુલસી શ્રીસખી શિવે, પાપહારિણી પુણ્યદે ।\nનમસ્તે નારદનુતે, નમો નારાયણપ્રિયે ॥",
      translation: "Tulsi, companion of Shri and Shiva, remover of sin, giver of merit — salutations, praised by Narada; salutations, beloved of Narayana.",
      translation_gu: "તુલસી — શ્રી અને શિવની સખી, પાપ હરનારી, પુણ્ય આપનારી — નારદજી દ્વારા સ્તુત, નારાયણપ્રિયા, નમસ્કાર.",
      language: "Sanskrit",
      language_gu: "સંસ્કૃત / ગુજરાતી",
      religion: "Hinduism",
      religion_gu: "હિન્દુ ધર્મ"
    },
    {
      id: "shayan-mantra",
      title: "Mantra at bedtime (before sleep)",
      title_gu: "શયન વખતે બોલવાનો મંત્ર",
      text: "कृष्णाय वासुदेवाय हरये परमात्मने ।\nप्रणतः क्लेशनाशाय गोविंदाय नमो नमः ॥",
      text_gu: "કૃષ્ણાય વાસુદેવાય હરયે પરમાત્મને ।\nપ્રણત: ક્લેશનાશાય ગોવિંદાય નમો નમ: ॥",
      translation: "To Krishna, Vasudeva, Hari, the Supreme Self — the prostrator, destroyer of afflictions: Govinda, salutations again and again.",
      translation_gu: "કૃષ્ણ, વાસુદેવ, હરિ, પરમાત્મા — ક્લેશનાશક ગોવિંદને વારંવાર નમસ્કાર.",
      language: "Sanskrit",
      language_gu: "સંસ્કૃત / ગુજરાતી",
      religion: "Hinduism",
      religion_gu: "હિન્દુ ધર્મ"
    },
    {
      id: "gayatri-mantra",
      title: "Gayatri Mantra",
      title_gu: "ગાયત્રી મંત્ર",
      text: "ॐ भूर्भुवः स्वः तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि ।\nधियो यो नः प्रचोदयात् ॥",
      text_gu: "ૐ ભૂર્ભુવઃ સ્વઃ તત્સવિતુર્વરેણ્યં ભર્ગો દેવસ્ય ધીમહિ ।\nધિયો યો નઃ પ્રચોદયાત્ ॥",
      translation: "The Gayatri: we meditate on the supreme splendour (bharga) of Savitur, the divine Sun — may that God inspire and guide our intellects.",
      translation_gu: "ગાયત્રી મંત્ર: આપણે સવિતૃ (સૂર્ય દેવ)ના દિવ્ય તેજ (ભર્ગ)નું ધ્યાન કરીએ — તે ભગવાન આપણી બુદ્ધિને પ્રેરે અને માર્ગદર્શન આપે.",
      language: "Sanskrit",
      language_gu: "સંસ્કૃત / ગુજરાતી",
      religion: "Hinduism",
      religion_gu: "હિન્દુ ધર્મ"
    },
    {
      id: "manasa-devi-mantra",
      title: "Manasa Devi Mantra",
      title_gu: "મનસા દેવીનો મંત્ર",
      text: "ॐ ह्रीं क्लीं श्रीं मनसादेव्यै नमः ॥\nॐ ह्रीं तत्कारिणी विषहारिणी विषरूपिणी विषं हन् इन्द्रस्य वज्रेण नमः ॥",
      text_gu: "ૐ હ્રીં ક્લીં શ્રી મનસા દેવીય નમઃ\nૐ હ્રીં તત્કારીણી વિષહારીણી વિષરુપિણી વિષમ્ હન ઇન્દ્રસ્ય વજ્રેણ નમઃ",
      translation: "Salutations to Goddess Manasa with the bija mantras Hrim, Klim, Shrim. Salutation to her who removes poison, whose form is poison, who destroys venom — by Indra’s vajra, namah.",
      translation_gu: "હ્રીં, ક્લીં, શ્રી સહિત મનસા દેવીને નમસ્કાર. વિષ હરનારી, વિષરૂપિણી, વિષનાશક — ઇન્દ્રના વજ્રથી નમઃ.",
      notes_gu: "મનસા દેવી ના પતિ નું નામ જલતકાઈ છે.\nઆસ્તિક ઋષિ ના પિતા થાય \nસાવિત્રી ના પિતા અશ્વપતિ છે.\nકુબેર ભંડારી ની માતા નું નામ ઇરવિરા(આરવિરા) છે.",
      language: "Sanskrit",
      language_gu: "સંસ્કૃત / ગુજરાતી",
      religion: "Hinduism",
      religion_gu: "હિન્દુ ધર્મ"
    },
    {
      id: "vasuki-nava-naga-stotram",
      title: "Vasuki mantra — Nava Naga Stotram",
      title_gu: "વાસુકી મંત્ર (નવ નાગ સ્તોત્ર)",
      text: "अनन्तं वासुकीं शेषं पद्मनाभं च कम्बलम् ।\nशङ्खपालं धार्तराष्ट्रं तक्षकं कालियस्तथा ।\nएतानि नवनामानि नागानां च महात्मनः ।\nसायंकाले पठेन् नित्यं प्रातःकाले विशेषतः ।\nतस्य विषभयं नास्ति सर्वत्र विजयी भवेत् ॥",
      text_gu: "અનંતમ્ વાસુકીમ્ શેષમ્ પદ્મનાભમ્ ચ કંબલમ્\nશંખપાલમ્ ધાર્તરાષ્ટ્રમ્ તક્ષકમ્ કાલિયસ્તથા\nએતાનિ નવનામાનિ નાગાનામ્ ચ મહાત્મનઃ\nસાયમ્કાલે પઠેન્ નિત્યમ્ પ્રાતઃકાલે વિશેષતઃ\nતસ્ય વિષભયમ્ નાસ્તિ સર્વત્ર વિજયી ભવેત્",
      translation: "The nine great serpent names: Ananta, Vasuki, Shesha, Padmanabha, Kambala, Shankhapala, Dhartarashtra, Takshaka, and Kaliya. One who recites these daily at dusk and especially at dawn has no fear of poison and is victorious everywhere.",
      translation_gu: "નવ મહાનાગોના નામ: અનંત, વાસુકી, શેષ, પદ્મનાભ, કંબલ, શંખપાલ, ધાર્તરાષ્ટ્ર, તક્ષક અને કાલિય. સાંજે નિત્ય અને વિશેષે સવારે પઠન કરનારને વિષનો ભય ન રહે અને સર્વત્ર વિજયી થાય.",
      language: "Sanskrit",
      language_gu: "સંસ્કૃત / ગુજરાતી",
      religion: "Hinduism",
      religion_gu: "હિન્દુ ધર્મ"
    },
    {
      id: "ramchandra-bhagwan-mantra",
      title: "Ramchandra Bhagwan Mantra",
      title_gu: "રામચંદ્ર ભગવાનનો મંત્ર",
      text: "श्री रामचंद्र कृपालु भज मन हरणं भवभय दारुणम् ।\nॐ श्री दशरथनंदन ॥\nॐ रामचंद्र भगवान नमः ॥",
      text_gu: "શ્રી રામચંદ્ર કૃપાલુ ભજ મન હરણમ્ ભવભય દારુણમ્\nૐ શ્રી દશરથનંદન\nૐ રામચંદ્ર ભગવાન નમઃ",
      translation: "O mind, worship gracious Lord Ramachandra, who removes the terrible fear of worldly existence. Om, salutations to Shri, son of Dasharatha. Om, salutations to Lord Ramachandra.",
      translation_gu: "હે મન, કૃપાળુ રામચંદ્ર ભગવાનની ભક્તિ કર, જે ભવભયના ભયનો હરણ કરે. ૐ, શ્રી દશરથનંદનને નમસ્કાર. ૐ, રામચંદ્ર ભગવાનને નમઃ.",
      language: "Sanskrit",
      language_gu: "સંસ્કૃત / ગુજરાતી",
      religion: "Hinduism",
      religion_gu: "હિન્દુ ધર્મ"
    },
    {
      id: "guru-dattatreya-mantra",
      title: "Guru Dattatreya Mantra",
      title_gu: "ગુરુદત્તાત્રેયનો મંત્ર",
      text: "दिगम्बरा दिगम्बरा श्रीपाद वल्लभ दिगम्बरा ॥",
      text_gu: "દિગમ્બરા દિગમ્બરા શ્રીપાદ વલ્લભ દિગમ્બરા",
      translation: "Salutation to Digambara (the clothed-in-space Lord Dattatreya), to Shripad Vallabh — Digambara.",
      translation_gu: "દિગમ્બરા દત્તાત્રેય અને શ્રીપાદ વલ્લભ દિગમ્બરાને નમસ્કાર.",
      language: "Sanskrit",
      language_gu: "સંસ્કૃત / ગુજરાતી",
      religion: "Hinduism",
      religion_gu: "હિન્દુ ધર્મ"
    },
    {
      id: "masoor-dal-mantra",
      title: "Masoor dal mantra (red lentil)",
      title_gu: "મસૂરની દાળનો મંત્ર",
      text: "भीम रूप धरी असुर संहारे ।\nरामचंद्र के काज सवारे ॥",
      text_gu: "ભીમ રૂપ ધરી અસૂર સંહારે ।\nરામચંદ્ર કે કાજ સવારે ॥",
      translation: "In mighty (Bhim-like) form you slay demons; you accomplish Lord Ramchandra’s work — recited in connection with masoor dal offering.",
      translation_gu: "ભીમ સમાન પરાક્રમથી અસુરોનો સંહાર કરો; રામચંદ્રજીના કાર્ય સિદ્ધ કરો — મસૂરની દાળ સાથે બોલાતો મંત્ર.",
      language: "Hindi",
      language_gu: "ગુજરાતી / હિન્દી",
      religion: "Hinduism",
      religion_gu: "હિન્દુ ધર્મ"
    },
    {
      id: "mahalakshmi-beej-mantra",
      title: "Lakshmi mantra (Mahalakshmi bija)",
      title_gu: "લક્ષ્મીનો મંત્ર",
      text: "ॐ श्रीं ह्रीं श्रीं कमले कमलालये प्रसीद प्रसीद\nश्रीं ह्रीं श्रीं ॐ महालक्ष्म्यै नमः ॥",
      text_gu: "ૐ શ્રીં હ્રીં શ્રીં કમલે કમલાલયે પ્રસીદ પ્રસીદ\nશ્રીં હ્રીં શ્રીં ૐ મહાલક્ષ્મ્યૈ નમઃ ॥",
      translation: "With the bija syllables Shrim and Hrim, supplication to Mahalakshmi, who abides on the lotus — be pleased, be pleased; obeisance to great Lakshmi.",
      translation_gu: "શ્રીં, હ્રીં બીજ સાથે કમલ પર વિરાજમાન મહાલક્ષ્મીને પ્રાર્થના — પ્રસન્ન થાઓ; મહાલક્ષ્મીને નમઃ.",
      notes_gu:
        "લક્ષ્મીજી નો પરિવાર\nલક્ષ્મીજી ના માતા નું નામ:- અનારિકા માતા\nલક્ષ્મીજી ના પિતાનું નામ:- રત્નાકર સાગર\nલક્ષ્મીજી ના પતિ નું નામ:- વિષ્ણુ ભગવાન\nલક્ષ્મીજી ના પુત્રો ના નામ:- ચીકલીત,આનંદ,કર્દમ, શ્રીપદ\nલક્ષ્મી જી નો મંત્ર:-\nॐ श्रीं ह्रीं श्रीं कमले कमलालये प्रसीद प्रसीद।\nश्रीं ह्रीं श्रीं ॐ महालक्ष्म्यै नमः।।",
      language: "Sanskrit",
      language_gu: "સંસ્કૃત / ગુજરાતી",
      religion: "Hinduism",
      religion_gu: "હિન્દુ ધર્મ"
    },
    {
      id: "bilva-patra-mantra",
      title: "Mantra while offering Bilva leaves (to Shiva)",
      title_gu: "બીલીપત્ર ચડાવતી વખતે બોલવાનો મંત્ર",
      text: "त्रिदलं त्रिगुणाकारं त्रिनेत्रं च त्रिधायुधम् ।\nत्रिजन्म पापसंहारं एक बिल्वं शिवार्पणम् ॥",
      text_gu: "ત્રિદલમ્ ત્રિગુણાકારમ્, ત્રિનેત્રમ્ ચ ત્રિધાયુધમ્ ।\nત્રિજન્મ પાપ સંહારમ્, એક બિલ્વમ્ શિવાર્પણમ્ ॥",
      translation: "The three-leaf Bilva represents the three guṇas, the three-eyed Lord and his triple weapon; it destroys sins of three births — I offer one Bilva to Shiva.",
      translation_gu: "ત્રિપત્રી બીલી ત્રિગુણ, ત્રિનેત્રી શિવ અને ત્રિધાયુધનું પ્રતીક; ત્રિજન્મના પાપનો નાશ — એક બીલીપત્ર શિવને અર્પણ.",
      language: "Sanskrit",
      language_gu: "સંસ્કૃત / ગુજરાતી",
      religion: "Hinduism",
      religion_gu: "હિન્દુ ધર્મ"
    },
    {
      id: "ganesha-durva-mantra",
      title: "Mantra while offering Durva to Ganpati",
      title_gu: "ગણપતિ દાદાને ધરો ચડાવતી વખતે આ મંત્ર",
      text: "दुर्वे ह्यमृतसंपन्ने सतमूले सतांकुरे ।\nशतं पातक हरती सतामायुर्वर्धिनी ॥",
      text_gu: "દુર્વે હ્યમૃત સંપન્ને, સતમૂલે સતાંકુરે ।\nસતમ્ પાતક સૌહરતી, સંત આયુસ્થ વર્ધિની ॥",
      translation: "Durva, rich with nectar, with true root and true shoots — it removes hosts of sins and increases the life of the virtuous.",
      translation_gu: "અમૃત સમાન દુર્વા, સત્ત્વપૂર્ણ મૂળ અને કોપલા — પાપ હરે અને સાધુઓનું આયુષ વધારે.",
      language: "Sanskrit",
      language_gu: "સંસ્કૃત / ગુજરાતી",
      religion: "Hinduism",
      religion_gu: "હિન્દુ ધર્મ"
    },
    {
      id: "bhojan-mantra",
      title: "Bhojan mantra (before / during meals)",
      title_gu: "ભોજનનો મંત્ર",
      text: "अन्नं ब्रह्म रसो विष्णुर्भोक्ता देवो महेश्वरः ।\nएवं ज्ञात्वा नरो भुञ्जते सोऽन्नदोषैर्न लिप्यते ॥",
      text_gu: "અન્નમ્ બ્રહ્મ રસો વિષ્ણુ, ભોક્તામ્ દેવો મહેશ્વરઃ |\nએવમ્ જ્ઞાત્વા નરો ભુક્તે, સો અન્ન દોષૈન લિપ્યતે ||",
      translation: "Food is Brahman, its essence Vishnu, the eater is the god Maheshwara — knowing thus, the person who eats is not tainted by faults of food.",
      translation_gu: "અન્ન બ્રહ્મ, રસ વિષ્ણુ, ભોક્તા મહેશ્વર — આમ સમજી ખાતા અન્નદોષથી લિપ્ત ન થાય.",
      language: "Sanskrit",
      language_gu: "સંસ્કૃત / ગુજરાતી",
      religion: "Hinduism",
      religion_gu: "હિન્દુ ધર્મ"
    },
    {
      id: "mahamrityunjaya-mantra",
      title: "Mahamrityunjaya Mantra",
      title_gu: "મહામૃત્યુંજય મંત્ર",
      text: "ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम् ।\nउर्वारुकमिव बन्धनान्मृत्योर्मुक्षीय मामृतात् ॥",
      text_gu: "ૐ ત્ર્યમ્બકમ્ યજામહે સુગન્ધિમ્ પુષ્ટિવર્ધનમ્\nઉર્વારુકમિવ બન્ધનામ્ મૃત્યોર્મુક્ષીય મામૃતાત્ ||",
      translation: "We worship the three-eyed Lord, fragrant and nourishing; as a ripe cucumber is freed from its stem, may I be freed from death and bound to immortality.",
      translation_gu: "ત્ર્યમ્બક શિવની ઉપાસના — સુગંધિત, પુષ્ટિકર્તા; જેમ પાકી કાકડી વેલાથી મુક્ત થાય, તેમ મૃત્યુના બંધનથી મુક્તિ અને અમરત્વ મળે.",
      language: "Sanskrit",
      language_gu: "સંસ્કૃત / ગુજરાતી",
      religion: "Hinduism",
      religion_gu: "હિન્દુ ધર્મ"
    },
    {
      id: "krishna-vandan-mantra",
      title: "Salutation to Shri Krishna",
      title_gu: "શ્રીકૃષ્ણને વંદન",
      text: "वसुदेव सुतं देवं कंसचाणूरमर्दनम् ।\nदेवकीपरमानन्दं कृष्णं वन्दे जगद्गुरुम् ॥",
      text_gu: "વસુદેવ સુતમ્ દેવમ્ કંસચાણૂરમર્દનમ્ ।\nદેવકીપરમાનન્દમ્ કૃષ્ણમ્ વંદે જગતગુરુમ્ ॥",
      translation: "I bow to Krishna, son of Vasudeva, slayer of Kamsa and Chanura, supreme bliss of Devaki, teacher of the world.",
      translation_gu: "વસુદેવનાં પુત્ર, કંસ અને ચાણૂરના વધક, દેવકીના પરમાનંદ, જગતગુરુ કૃષ્ણને વંદન.",
      language: "Sanskrit",
      language_gu: "સંસ્કૃત / ગુજરાતી",
      religion: "Hinduism",
      religion_gu: "હિન્દુ ધર્મ"
    },
    {
      id: "agni-pragatavvano-mantra",
      title: "Mantra for lighting the sacred fire",
      title_gu: "અગ્નિ પ્રગટાવવાનો મંત્ર",
      text: "ॐ चित्पिंगल हन हन पच पच दह दह ।\nसर्वज्ञापय ज्ञापय स्वाहा ॥",
      text_gu: "ૐ ચિત્પિંગલ હન હન પચ પચ દહ દહ ।\nસર્વજ્ઞાપય જ્ઞાપય સ્વાહા ॥",
      translation: "Om to Chitpingala — burn, burn; cook, cook; consume, consume; make all known, make known — svāhā (ritual fire invocation).",
      translation_gu: "ૐ ચિત્પિંગલ — હન, પચ, દહ; સર્વને જ્ઞાપિત કરો — સ્વાહા (અગ્નિ પ્રગટાવવાનો ઉચ્ચાર).",
      language: "Sanskrit",
      language_gu: "સંસ્કૃત / ગુજરાતી",
      religion: "Hinduism",
      religion_gu: "હિન્દુ ધર્મ"
    },
    {
      id: "namami-gange-mantra",
      title: "Ganga mantra (Namami Gange)",
      title_gu: "ગંગાનો મંત્ર",
      text: "नमामि गङ्गे तव पादपङ्कजं\nसुरासुरैर्वन्दित दिव्यरूपम् ।\nभुक्तिं च मुक्तिं च ददासि नित्यं\nभावानुसारेण सदा नराणाम् ॥",
      text_gu: "નમામિ ગંગે! તવ પાદપંકજમ્\nસુરાસુરૈર્વન્દિત દિવ્યરૂપમ્ ।\nભુક્તિમ્ ચ મુક્તિમ્ ચ દદાસિ નિત્યમ્\nભાવાનુસારેણ સદા નરાણામ્ ॥",
      translation: "I bow to you, Ganga, to your lotus feet, divine form worshipped by gods and demons — you ever grant enjoyment and liberation to people according to their devotion.",
      translation_gu: "હે ગંગા, તમારા ચરણકમલ અને દિવ્ય સ્વરૂપને નમામિ — દેવાસુર વંદિતા; ભક્તિ અનુસાર ભુક્તિ અને મુક્તિ આપનારી.",
      notes_gu: "ગંગા માતા નો પરિવાર\nપિતાનું નામ:- હિમાલય\nમાતા નુ નામ :- મેના દેવી\nપતિ નુ નામ :- શાંતનુ ઋષિ\nપુત્ર નુ નામ:- ભીષ્મ પિતામહ \nબહેનનું નામ:- પાર્વતી માતા",
      language: "Sanskrit",
      language_gu: "સંસ્કૃત / ગુજરાતી",
      religion: "Hinduism",
      religion_gu: "હિન્દુ ધર્મ"
    },
    {
      id: "samudra-mantra",
      title: "Samudra mantra (ocean)",
      title_gu: "સમુદ્રનો મંત્ર",
      text: "ॐ समुद्रस्य त्वावकाऽग्ने परिध्वयामसि ।\nपावको अस्मभ्यं गृहं शिवो भव ॥",
      text_gu: "ૐ સમુદ્રસ્ય ત્વાવક્યાગ્ને પરિધ્વયામસિ ।\nપાવકો અસ્મભ્ય ગ્ગું શિવો ભવ ॥",
      translation: "Om — we encircle you with the ocean’s presence and fire; O Pavaka (pure flame), be auspicious and gracious to us, be Shiva-like (auspicious) for our home.",
      translation_gu: "સમુદ્ર અને અગ્નિ સાથે પરિધિ — હે પાવક, અમારા ઘર માટે શુભ અને કલ્યાણકારી થાઓ.",
      language: "Sanskrit",
      language_gu: "સંસ્કૃત / ગુજરાતી",
      religion: "Hinduism",
      religion_gu: "હિન્દુ ધર્મ"
    },
    {
      id: "bhavani-dhyana-mantra",
      title: "Bhavani mantra (dhyana verse)",
      title_gu: "ભવાનીનો મંત્ર",
      text: "अरुणां करुणां तरंगी ताक्षीं\nधृत पाशाङ्कुश बाण चाप हस्ताम् ।\nअणिमादीभिरावृतां मयूखैः\nरह मित्येव विभावये भवानीम् ॥",
      text_gu: "અરુણામ્ કરુણામ્ તરંગી તાક્ષી,\nધૃત પાશાંકુશ બાણ ચાપ હસ્તામ્ ।\nઅણિમાદી ભિરાવૃતા મયૂખૈ,\nરહ મિત્યેવ વિભાવયે ભવાનીમ્ ॥",
      translation: "Meditation verse for Goddess Bhavani: dawns with compassion, radiant-eyed, holding noose, goad, arrow and bow, surrounded by siddhis and rays — thus I envision Bhavani.",
      translation_gu: "ભવાની માંનું ધ્યાન: કરુણામય, તરંગી નેત્ર, પાશ, અંકુશ, બાણ અને ધનુષ હસ્ત, અણિમાદિ સિદ્ધિઓ અને કિરણોથી ઘેરાયેલી — આમ ભવાનીનું ચિંતન કરું.",
      language: "Sanskrit",
      language_gu: "સંસ્કૃત / ગુજરાતી",
      religion: "Hinduism",
      religion_gu: "હિન્દુ ધર્મ"
    },
    {
      id: "vasishtha-pratarkshini-mantra",
      title: "Vashishtha Pratarkshini mantra (salutation to Vashishtha)",
      title_gu: "વશિષ્ઠ પ્રતર્ષિની મંત્ર",
      text: "नमस्तुभ्यं वसिष्ठाय कर्मकर्त्रे महामुने ।\nधर्मरूपाय महते लोकानां हितकारिणे ॥",
      text_gu: "નમસ્તુભ્ય વસિષ્ઠાય\nકર્મ કર્ત્રે મહામુને ।\nધર્મ રૂપાય મહતે\nલોકોનામ્ હિત કારિણે ॥",
      translation: "Salutations to sage Vashishtha, doer of sacred works, great muni, embodiment of dharma, great soul who works for the welfare of the worlds.",
      translation_gu: "મહામુનિ વસિષ્ઠને નમસ્કાર — કર્મકર્તા, ધર્મસ્વરૂપ, મહાન, લોકોના હિત કરનારા.",
      language: "Sanskrit",
      language_gu: "સંસ્કૃત / ગુજરાતી",
      religion: "Hinduism",
      religion_gu: "હિન્દુ ધર્મ"
    },
    {
      id: "shakti-tilak-mantra",
      title: "Mantra for applying tilak to Shakti (Devi)",
      title_gu: "શક્તિને તિલક કરવાની મંત્ર",
      text: "गन्धेन कुर्वे तव भालदेशे शुभं समयं विधिधृतां प्रियाम् ।\nन चेदैव ते कुंकुमं रक्तवर्णं अश्वत्थपत्र कृतिमां ददामि ॥",
      text_gu: "ગન્ધેન કુર્વે તવ ભાલદેશે શુભં સમયં વિધિધૃતાં પ્રિયામ્ |\nન ચેદૈવ તે કુંકુમં રક્તવર્ણં અશ્વત્થપત્ર કૃતિમાં દદામિ ||",
      translation: "With fragrance I mark your forehead region — auspicious, timely, dear, upheld by sacred rule; now I offer you kumkum, red as blood, shaped like the peepal leaf.",
      translation_gu: "ગંધથી તમારા ભાલ પર શુભ સમયે તિલક — વિધિપૂર્વક પ્રિયા; હવે રક્તવર્ણ કુંકુમ અશ્વત્થપત્રાકારે અર્પણ કરું.",
      language: "Sanskrit",
      language_gu: "સંસ્કૃત / ગુજરાતી",
      religion: "Hinduism",
      religion_gu: "હિન્દુ ધર્મ"
    },
    {
      id: "shakti-akshat-mantra",
      title: "Mantra for offering rice (akshat) to Shakti",
      title_gu: "શક્તિને ચોખા ચોડવાનો મંત્ર",
      text: "रत्नाक्षैस्त्वां परिपूजयामि मुक्ताफलैर्वा रुचिरैः पिच्छैः ।\nअखण्डितैर्दध्योदनादिमिश्रैः काश्मीरपत्रकुलतन्दुलैर्वा ॥",
      text_gu: "રત્નાક્ષૈસ્ત્વાં પરિપૂજયામિ મુક્તફલૈર્વા રુચિરૈઃ પિચ્છૈઃ |\nઅખંડિતૈર્દધ્યોદનાદિમિશ્રૈઃ કાશ્મીરપત્રકુલતંદુલૈર્વા ||",
      translation: "I worship you with jewelled offerings, or with pearls, fine picchha (plumes), or with unbroken rice mixed with curd-rice and the like, or with Kashmir-style leaves and fine grains.",
      translation_gu: "રત્નાક્ષત, મોતી, સુંદર પિચ્છ, અખંડ ચોખા દહી ભાત સાથે, કે કાશ્મીરપત્ર અને તંદુલથી તમારી પૂજા કરું.",
      language: "Sanskrit",
      language_gu: "સંસ્કૃત / ગુજરાતી",
      religion: "Hinduism",
      religion_gu: "હિન્દુ ધર્મ"
    },
    {
      id: "kaal-bhairav-mantra",
      title: "Kaal Bhairav mantra",
      title_gu: "કાલભૈરવનો મંત્ર",
      text: "धर्मसेतु पालकं अधर्म मार्ग नाशकं\nकर्म पाश मोचकं सुशर्म दायकं विभुम् ।\nस्वर्णवर्ण शेष पाश शोभितांग मण्डलम्\nकाशिका पुराधि नाथ कालभैरवं भजे ॥",
      text_gu: "ધર્મસેતુ પાલકં, અધર્મ માર્ગ નાશકં,\nકર્મ પાશ મોચકં, સુશર્મ દાયકં વિભુમ્ ।\nસ્વર્ણવર્ણ શેષ પાશ, શોભિતાંગ મંડલમ્ ।\nકાશિકા પુરાધિ નાથ કાલભૈરવમ્ ભજે ॥",
      translation: "Salutations to Kalabhairava, lord of Kashi: protector of dharma’s bridge, destroyer of unrighteous paths, releaser from karmic bonds, giver of blessed comfort — golden-hued, adorned with serpent-garland and shining limbs.",
      translation_gu: "કાશીના અધિપતિ કાલભૈરવને ભજો — ધર્મસેતુના પાલક, અધર્મનાશક, કર્મપાશમોચક, સુખશાંતિ દાયક; સુવર્ણવર્ણ, શેષપાશશોભિત અંગમંડલ.",
      language: "Sanskrit",
      language_gu: "સંસ્કૃત / ગુજરાતી",
      religion: "Hinduism",
      religion_gu: "હિન્દુ ધર્મ"
    },
    {
      id: "siddhidatri-mantra",
      title: "Siddhidatri mantra",
      title_gu: "સિદ્ધિદાત્રીનો મંત્ર",
      text: "देवि प्रपन्नार्तिहरे प्रसीद प्रसीद मातर् जगतो खिलस्य ।\nप्रसीद विश्वेश्वरि पाहि विश्वं त्वमीश्वरी देवि चराचरस्य ॥",
      text_gu: "દેવી પ્રપન્નાર્તિ હરે પ્રસીદ\nપ્રસીદ માતર્જગતો ખિલસ્ય ।\nપ્રસીદ વિશ્વશ્વરિ પાહિ વિશ્વમ્\nત્વમીશ્વરી દેવિ ચરા ચરસ્ય ॥",
      translation: "Goddess, remover of the devotee’s distress — be pleased; be pleased, Mother of the whole world. Be pleased, ruler of the universe; protect the world — you are the empress of all that moves and moves not.",
      translation_gu: "હે દેવી, શરણાગતના દુ:ખ હરનારી — પ્રસન્ન થાઓ; સમગ્ર જગતની માં. હે વિશ્વેશ્વરી, વિશ્વની રક્ષા કરો — ચરાચરની ઈશ્વરી.",
      language: "Sanskrit",
      language_gu: "સંસ્કૃત / ગુજરાતી",
      religion: "Hinduism",
      religion_gu: "હિન્દુ ધર્મ"
    },
    {
      id: "mahakalratri-dhyana-mantra",
      title: "Mahakalratri mantra (Kalika dhyana)",
      title_gu: "મહાકાલરાત્રિનો મંત્ર",
      text: "खड्गं चक्र गदेषु चाप परिघान्\nशूलं भुशुण्डी शिरः\nशङ्खं सन्दधतीं करैः त्रिनयनां\nसर्वाङ्गभूषावृताम्,\nनीलाश्मद्युतिमास्थितपाददशकां\nसेवे महाकालिकां\nयामस्तौत् स्वपिते हरौ कमलजो\nहन्तु मधुं कैटभम् ॥",
      text_gu: "ખડ્ગં ચક્ર ગદેષુ ચાપ પરિઘાન્\nશૂલમ્ ભુશુંડી શિરઃ\nશંખં સંદધતીં કરૈઃ ત્રિનયનાં\nસર્વાંગ ભૂષા વૃતામ્ ,\nનીલાશ્મ દ્યુતિ માસ્થ પાદ દશકાં\nસેવે મહા કાલિકાં\nયામસ્તૌત્ સ્વપિતે હરૌ કમલજો\nહંતુ મધું કૈટભમ્ ||",
      translation: "Dhyana of Mahakali, armed with sword, discus, mace, bow, parigha, trident, bhushundi and head, conch in her hands, three-eyed, adorned on every limb, dark as a blue stone — I revere her whom Hari and Brahma praised in the dream, to slay Madhu and Kaitabha.",
      translation_gu: "મહાકાલીનું ધ્યાન — ખડ્ગ, ચક્ર, ગદા, ધનુષ, પરિઘ, શૂલ, ભુશુંડી, શિર, શંખ, ત્રિનેત્ર, સર્વાભૂષિત, નીલાશ્મદ્યુતિ; જેને હરિ-બ્રહ્માએ સ્વપ્નમાં સ્તુતિ કરી મધુકૈટભનો વધ કર્યો.",
      language: "Sanskrit",
      language_gu: "સંસ્કૃત / ગુજરાતી",
      religion: "Hinduism",
      religion_gu: "હિન્દુ ધર્મ"
    },
    {
      id: "makardhwaj-gayatri-mantra",
      title: "Makardhwaj mantra (Gayatri to Hanuman’s son)",
      title_gu: "મકરધ્વજનો મંત્ર",
      text: "मकरध्वजाय विद्महे कपिपुत्राय धीमहि ।\nतन्नो मकराय प्रचोदयात् ॥",
      text_gu: "મકરધ્વજાય વિદ્મહે , કપિપુત્રાય ધીમહિ ।\nતન્નો મકરાય પ્રચોદયાત્ ॥",
      translation: "We meditate on Makardhwaj, son of the monkey (vanara); may that Makara form inspire our meditation.",
      translation_gu: "મકરધ્વજ (હનુમાનપુત્ર)નું ધ્યાન; તે મકરસ્વરૂપ આપણને પ્રેરે.",
      language: "Sanskrit",
      language_gu: "સંસ્કૃત / ગુજરાતી",
      religion: "Hinduism",
      religion_gu: "હિન્દુ ધર્મ"
    },
    {
      id: "kagbhushundi-mantra",
      title: "Kagbhushundi Maharaj mantra",
      title_gu: "કાગભુસુંડીનો મંત્ર",
      text: "ॐ श्री कागभुसुंडी महाराज नमः ॥",
      text_gu: "ૐ શ્રી કાગભુસુંડી મહારાજ નમઃ ॥",
      translation: "Om, salutations to Shri Kagbhushundi Maharaj.",
      translation_gu: "ૐ, શ્રી કાગભુસુંડી મહારાજને નમઃ.",
      language: "Sanskrit",
      language_gu: "સંસ્કૃત / ગુજરાતી",
      religion: "Hinduism",
      religion_gu: "હિન્દુ ધર્મ"
    },
    {
      id: "aasana-shuddhi-mantra",
      title: "Aasan shuddhi (purifying the seat)",
      title_gu: "આસનશુદ્ધિ",
      text: "पृथ्वी त्वया धृता लोका देवि त्वं विष्णुना धृता ।\nत्वं च धारय मां देवि पवित्रं कुरु चासनम् ॥",
      text_gu: "પૃથ્વી ત્વયા ધૃતા લોકા દેવિ ત્વં વિષ્ણુના ધૃતા ।\nત્વં ચ ધારય માં દેવિ પવિત્રં કુરુ આસનમ્ ॥",
      translation: "O Earth, worlds are upheld by you; you are upheld by Vishnu — support me too, Goddess, and make this seat pure.",
      translation_gu: "હે પૃથ્વી, તમે લોક ધારો છો; વિષ્ણુએ તમને ધાર્યા — મને પણ ધારો, આસન પવિત્ર કરો.",
      language: "Sanskrit",
      language_gu: "સંસ્કૃત / ગુજરાતી",
      religion: "Hinduism",
      religion_gu: "હિન્દુ ધર્મ"
    },
    {
      id: "swastik-mangalam-mantra",
      title: "Swastik mantra (Mangalam to Vishnu + Shri verse)",
      title_gu: "સ્વસ્તિકનો મંત્ર",
      text: "मंगलम् भगवान् विष्णुः मंगलं गरुडध्वजः ।\nमंगलं पुण्डरीकाक्षो मंगलाय तनो हरिः इति ॥\n\nया श्रीः स्वयं सुकृतिनां भवनेष्वलक्ष्मीः ।\nपापात्मनां कृतधियां हृदयेषु बुद्धिः ॥",
      text_gu: "મંગલમ્ ભગવાન વિષ્ણુ , મંગલમ્ ગરૂડ ધ્વજ ।\nમંગલમ્ પુંડરી કાક્ષો , મંગલાય તનો હરિ ઇતિ ॥\n\nયાશ્રી: સ્વયં સુકૃતિનાં ભવનેષ્વલક્ષ્મી: ।\nપાપાત્મનામ્ કૃતધિયાં હ્રદયેષુ બુદ્ધિ: ॥",
      translation: "Auspiciousness to Lord Vishnu, to Garuda-banner, to lotus-eyed Hari — thus auspiciousness. Shri dwells by merit in good homes; for the sinful-minded, (only) intellect in the heart.",
      translation_gu: "ભગવાન વિષ્ણુ, ગરુડધ્વજ, પુંડરીકાક્ષ હરિને મંગલ — ઇતિ. પુણ્યવાનોના ઘરે લક્ષ્મી સ્વયં વસે; પાપીના હૃદયમાં બુદ્ધિ.",
      language: "Sanskrit",
      language_gu: "સંસ્કૃત / ગુજરાતી",
      religion: "Hinduism",
      religion_gu: "હિન્દુ ધર્મ"
    },
    {
      id: "asan-gananayaka-mantra",
      title: "Mantra when sitting on the seat (to Gananayaka)",
      title_gu: "આસન પર બેસવાનો મંત્ર",
      text: "(ह्रीं) रम्यं शोभनं दिव्यं सर्वसौख्यसमन्वितम् ।\nआसनं च मया दत्तं गृहाण गणनायक ॥",
      text_gu: "(હ્રીં) રમ્યં શોભનં દિવ્યં સર્વ સૌખ્ય સમન્વિતમ્।\nઆસનં ચ મયા દત્તં ગૃહાણ ગણનાયક ॥",
      translation: "With Hrim — lovely, splendid, divine, filled with every comfort: this seat I offer; accept it, O leader of the hosts (Ganesha).",
      translation_gu: "હ્રીં સહિત — રમણીય, શોભન, દિવ્ય, સર્વ સુખયુક્ત આસન હું અર્પણ કરું; હે ગણનાયક, ગ્રહણ કરો.",
      language: "Sanskrit",
      language_gu: "સંસ્કૃત / ગુજરાતી",
      religion: "Hinduism",
      religion_gu: "હિન્દુ ધર્મ"
    },
    {
      id: "tilak-mantra-swasti-pavini",
      title: "Tilak mantra (Swasti — Pavini)",
      title_gu: "તિલકનો મંત્ર",
      text: "(ह्रीं) स्वस्तिस्तु पाविनी साक्षाद् धर्मकल्याणवृद्धिदा ।\nविनायकप्रिया नित्यं तां च स्वस्तिं ब्रुवन्तु नः ॥",
      text_gu: "(હ્રીં) સ્વસ્તિસ્તુ પાવિની સાક્ષાત્ ધર્મકલ્યાણ વૃદ્ધિદા ।\nવિનાયક પ્રિયા નિત્યં તાં ચ સ્વસ્તિં બ્રુવંતુનઃ ॥",
      translation: "Hrim — may there be welfare, O purifying one, manifest giver of dharma and welfare’s growth; ever dear to Vinayaka — may they proclaim that welfare for us.",
      translation_gu: "હ્રીં — પાવિની સ્વસ્તિ, ધર્મકલ્યાણવૃદ્ધિ દેનારી; વિનાયકપ્રિયા — તે સ્વસ્તિ આપણને બોલાવે.",
      language: "Sanskrit",
      language_gu: "સંસ્કૃત / ગુજરાતી",
      religion: "Hinduism",
      religion_gu: "હિન્દુ ધર્મ"
    },
    {
      id: "batuk-bhairav-mantra",
      title: "Batuk (Bambatuk) Bhairav mantra",
      title_gu: "બટુકભૈરવનો મંત્ર",
      text: "तीक्ष्णदंष्ट्र महाकाय कल्पान्तदहनोपम ।\nभैरवाय नमस्तुभ्यमनुज्ञां दातुमर्हसि ॥\nइति श्री बटुकभैरवाय नमः ।",
      text_gu: "તીક્ષ્ણદંષ્ટ્ર મહાકાય કલ્પાન્તે દહનીયમ ।\nભૈરવાય નમસ્તુભ્યમનુજ્ઞાં દાતુમર્હસિ ॥\nઇતિ શ્રી બાંબટુકભૈરવાય નમઃ ।",
      translation: "Fierce-fanged, vast-bodied, like fire at world’s end — Bhairava, salutations; please grant permission. Thus salutations to Shri Batuk Bhairav.",
      translation_gu: "તીક્ષ્ણ દાંત, મહાકાય, પ્રલયાગ્નિ સમાન ભૈરવને નમસ્કાર — અનુજ્ઞા આપો. શ્રી બટુક ભૈરવને નમઃ.",
      language: "Sanskrit",
      language_gu: "સંસ્કૃત / ગુજરાતી",
      religion: "Hinduism",
      religion_gu: "હિન્દુ ધર્મ"
    },
    {
      id: "mataji-shrifal-mantra",
      title: "Mantra for offering coconut to Mataji",
      title_gu: "માતાજીને શ્રીફળ અર્પણ કરવાનો મંત્ર",
      text: "इदं फलं मया दत्तं स्थापितं पुरस्तव ।\nतेन मे सफला वाप्तिर्भवेज्जन्मनि जन्मनि ॥",
      text_gu: "ઇદમ ફલમ મયા દત્તમ સ્થાપિતમ પુરસ્તવ ।\nતેન મે સફલા વાપતિ ભવે જન્મની જન્મની",
      translation: "This fruit is given by me, placed before you — by that may my speech bear fruit, birth after birth.",
      translation_gu: "આ ફળ હું અર્પણ કરું, તમારા આગળ ધરું — તે થી મારી વાણી જન્મ જન્મ સફળ થાય.",
      language: "Sanskrit",
      language_gu: "સંસ્કૃત / ગુજરાતી",
      religion: "Hinduism",
      religion_gu: "હિન્દુ ધર્મ"
    },
    {
      id: "saraswati-dhyana-mantra",
      title: "Saraswati mantra (dhyana)",
      title_gu: "સરસ્વતી નો મંત્ર",
      text: "घण्टा शूल हलानि शङ्ख मुसले चक्रं धनुः सायकम् ।\nहस्ताब्जे दधती घनान्तविलसच्छीतांशुतुल्यप्रभाम् ।\nगौरीदेहसमुद्भवां त्रिजगतां माधारभूतां महः ।\nपूर्वामात्र सरस्वतीं मनुर्भजे शुम्भादिदैत्यार्दिनीम् ॥",
      text_gu: "ઘણ્ટા શૂલ હલાનિ શંખ મુસલે, ચક્રં ધનુ: સાયકમ્\nહસ્તાબ્જે ર્દધતી ઘનાન્ત વિલસ, રચ્છીતાંશુ તુલ્ય પ્રભામ્\nગૌરી દેહ સમુદ્ભવાં ત્રિજગતા, માધાર ભૂતાં મહા\nપૂર્વામત્ર સરસ્વતી મનુ ભજે, શુમ્ભાદિ દૈત્યાર્દિનીમ્ ||",
      translation: "Meditation on Saraswati: bell, trident, plough, conch, pestle, discus, bow and arrow in her lotus hands, splendour like the cool moon — born from Gauri’s form, support of the three worlds, primal syllable, slayer of demons like Shumbha.",
      translation_gu: "સરસ્વતી ધ્યાન — ઘંટા, શૂલ, હલ, શંખ, મુસળ, ચક્ર, ધનુષ, બાણ; શીતચંદ્ર સમ પ્રભા; ગૌરીકાયથી ઉદ્ભવ, ત્રિજગત આધાર, પૂર્વામાત્રા, શુમ્ભાદિ દૈત્યાર્દિની.",
      language: "Sanskrit",
      language_gu: "સંસ્કૃત / ગુજરાતી",
      religion: "Hinduism",
      religion_gu: "હિન્દુ ધર્મ"
    },
    {
      id: "jogani-maa-mantra",
      title: "Jogani Maa mantra",
      title_gu: "જોગણીમાં નો મંત્ર",
      text: "जोजनगन्धा जोगणी, ऋद्धिसिद्धी दे भरपूर\nमें आयो तेरे आंगन, कार्य करजे जरूर",
      text_gu: "જોજનગંધા જોગણી, રિધ્ધિસિધ્ધી દે ભરપૂર\nમેં આયો તેરે આંગન, કાર્ય કરજે જરૂર",
      translation: "Jojangandha Jogani, grant riddhi and siddhi in abundance; I have come to your courtyard — please accomplish the work.",
      translation_gu: "જોજનગંધા જોગણી, ઋદ્ધિ-સિદ્ધિ ભરપૂર આપો; હું તમારા આંગણે આવ્યો — કાર્ય પૂરું કરજો.",
      language: "Gujarati",
      language_gu: "ગુજરાતી",
      religion: "Hinduism",
      religion_gu: "હિન્દુ ધર્મ"
    },
    {
      id: "dharma-ketava-mantra",
      title: "Dhaja mantra (Ketava)",
      title_gu: "ધજાનો મંત્ર",
      text: "ह्रीं रिं केतवे नमः ॥",
      text_gu: "હ્રીમ રિમ કેતવે નમ:",
      translation: "Hrim, Rim — salutations to Ketu (the banner / comet deity).",
      translation_gu: "હ્રીં, રિં — કેતવે નમઃ.",
      language: "Sanskrit",
      language_gu: "સંસ્કૃત / ગુજરાતી",
      religion: "Hinduism",
      religion_gu: "હિન્દુ ધર્મ"
    },
    {
      id: "vishnu-puja-mantra",
      title: "Vishnu mantra (invocation)",
      title_gu: "વિષ્ણુ નો મંત્ર",
      text: "ॐ इदं विष्णुर्विचक्रमे त्रेधा नि दधे पदम् ।\nसमूढमस्य पागं स्वाहा ॥\nह्रीं रत्नपात्रं पात्रमौषधि संस्थितम् ।\nकरे पद्मं च शङ्खं च नमो यादवनन्दनम् ॥\nॐ भूर्भुवः स्वः (ह्रीं) विष्णवे नमः ।\nविष्णुमावाहयामि स्थापयामि ॥",
      text_gu: "ૐ ઇદં વિષ્ણુ ર્વિચક્રમે ત્રેધાનિ દધેપદમ્ ।\nસમૂઢ મસ્ય પા(ગં) સુરેસ્વાહા ॥\nહ્રીં રત્નપાત્રં પાત્રમૌષધિ સંસ્થિતમ્ ।\nકરે પદ્મં ચ શંખં ચ નમો યાદવનંદનમ્ ॥\nૐ ભૂર્ભુવઃ સ્વઃ (હ્રીં) વિષ્ણવે નમઃ ।\nવિષ્ણુમાવાહયામિ સ્થા. ।",
      translation: "Vedic verse to Vishnu’s three steps; offering with svāhā; gem-vessel with medicine, lotus and conch in hand — salutations to Yadavanandana; Vyāhṛti with Hrim to Vishnu; I invoke and establish Vishnu.",
      translation_gu: "વિષ્ણુના ત્રિપાદ શ્લોક; સ્વાહા સહિત અર્પણ; રત્નપાત્ર, ઔષધિ, કમળ, શંખ — યાદવનંદનને નમો; ભૂર્ભુવઃસ્વઃ હ્રીં વિષ્ણવે નમઃ; વિષ્ણુ આવાહન અને સ્થાપન.",
      language: "Sanskrit",
      language_gu: "સંસ્કૃત / ગુજરાતી",
      religion: "Hinduism",
      religion_gu: "હિન્દુ ધર્મ"
    },
    {
      id: "svayam-tilak-mantra",
      title: "Mantra for applying tilak to oneself",
      title_gu: "પોતાને તિલક કરવાનો મંત્ર",
      text: "स्वस्ती स्तुया विना साध्या धर्मकल्याणवृद्धिदा ।\nविनायकं प्रिया नित्यं स्तवय स्वस्ति प्लवन्तु नः ॥",
      text_gu: "સ્વસ્તી સ્તુયા વિના સાધ્યા ધર્મ કલ્યાણ વૃદ્ધિદા ।\nવિનાયકમ પ્રિયા નિત્યમ સ્તવય સ્વસ્તી\nપ્લવાન્તુનઃ ॥",
      translation: "Welfare praised without (hindrance), granting dharma and welfare’s increase; ever dear to Vinayaka — we praise, may welfare flow to us.",
      translation_gu: "સ્વસ્તિ સ્તુતિથી ધર્મકલ્યાણ વૃદ્ધિ; વિનાયકપ્રિયા — સ્વસ્તિ આપણ પર વહે.",
      language: "Sanskrit",
      language_gu: "સંસ્કૃત / ગુજરાતી",
      religion: "Hinduism",
      religion_gu: "હિન્દુ ધર્મ"
    },
    {
      id: "brahma-mantra-avahana",
      title: "Brahma mantra (with avahana)",
      title_gu: "બ્રહ્માનો મંત્ર",
      text: "ॐ ब्रह्मयज्ञानं प्रथमं पुरस्ताद् विसीमतः ।\nसुरुचो वेन आपः सबुध्न्या उपमा विष्ठाः ।\nसतश्च योनिमसतश्च विवः ।\nह्रीं पद्मनस्थो जरितश्चतुर्वेदधरः सदा ।\nकृष्णाजीनधरो नित्यं ब्रह्मा शुक्रवपुश्च सः ॥\nॐ भूर्भुवः स्वः (ह्रीं) ब्रह्मणे नमः ।\nब्रह्माणमावाहयामि स्थापयामि ॥",
      text_gu: "ૐ બ્રહ્મયજ્ઞાનં પ્રથમં પુરસ્તા દ્વિસીમતઃ\nસૂરુચોવ્વેનડઆપઃ ।\nસબુધ્ન્યા ડ ઉપમા વિષ્ઠાઃ\nસતશ્ચયોનિમસતશ્ચવિવઃ\nહ્રીં પદમાનસ્થો જરિતઃ ચતુર્વેદધરઃ સદા ।\nકૃષ્ણાજીન ધરો નિત્યં બ્રહ્મા\nશુક્રવપુશ્ચ સઃ ||\nૐ ભૂર્ભુવઃ સ્વઃ (હ્રીં) બ્રહ્મણે નમઃ ।\nબ્રહ્માણમાવાહયામિ સ્થા. ||",
      translation: "Hymn to Brahma as first knowledge, cosmic waters and principles; Hrim — lotus-seated, aged bearer of the four Vedas, ever in black deer-skin, Brahma of bright form. Vyāhṛti and Hrim to Brahma; I invoke and establish Brahma. (Middle lines follow common Vedic phrasing; compare your notebook if any syllable differs.)",
      translation_gu: "બ્રહ્મનું જ્ઞાન પ્રથમ, જળ અને તત્ત્વો; હ્રીં — કમળાસન, ચતુર્વેદધર, કૃષ્ણાજીનધારી બ્રહ્મા. ભૂર્ભુવઃસ્વઃ બ્રહ્મણે નમઃ; બ્રહ્મ આવાહન-સ્થાપન. (વચલી લીટીઓ નોટબુક સાથે તપાસી શકાય.)",
      language: "Sanskrit",
      language_gu: "સંસ્કૃત / ગુજરાતી",
      religion: "Hinduism",
      religion_gu: "હિન્દુ ધર્મ"
    },
    {
      id: "chandra-mantra-avahana",
      title: "Chandra mantra (Soma + dhyana + avahana)",
      title_gu: "ચંદ્રનો મંત્ર",
      text: "ॐ इमं देवा असपत्नं सुवध्वं महते क्षत्राय महते ज्यैष्ठ्याय ।\nमहते जनराज्यायेन्द्र्यायैममुष्य पुत्रमुष्यै पुत्रमस्यै विश्वे एष वो अमी राजा सोमो अस्माकं ब्राह्मणानां राजा ॥\n\nद्रौं दधिशंखतुषाराभं क्षीरोदार्णवसंभवम् ।\nनमामि शशिनं सोमं शंभोर्मुकुटभूषणम् ॥\nॐ भूर्भुवः स्वः (द्रौं) चन्द्रमसे नमः ।\nचन्द्रमसं आवाहयामि स्थापयामि ॥",
      text_gu: "ૐ ઇમન્દેવા ऽ અસપત્નન (ગ્ગં) સુવધ્વમ્મહતે\nક્ષત્રાય મહતે\nજ્યૈષ્ઠ્યાય મહતેજન રાજ્યાયેન્દ્રસ્યેન્દ્રિયાય ।\nઇમમમુષ્ય પુત્રમ મુષ્યૈ પુત્ર મસ્યૈ વિશ\nऽ એષવોમી રાજા\nસોમો ऽ સ્માકં બ્રાહ્મણાના (ગ્ગં) રાજા ॥\n\nદ્રૌં દધિશંખ તુષારાભં ક્ષીરોદાર્ણવ સંભવમ્ ।\nનમામિ શશિનં સોમં શંભોર્મુકુટ ભૂષણમ્ ॥\nૐ ભૂર્ભુવ: સ્વ: (દ્રૌં) ચંદ્રમસે નમ: ।\nચંદ્ર મસમાવાહયામિ સ્થાપયામિ ॥",
      translation: "Vedic homage to Soma as king among Brahmins; then dhyana: yoghurt-conch-cool-rayed, ocean-of-milk-born moon — salutations to Shashi, Soma, ornament of Shambhu’s crown; vyāhṛti with Draum to the Moon; invoke and establish Chandra.",
      translation_gu: "સોમરાજા ઋગ્વેદીય સ્તુતિ; પછી ધ્યાન — દધિશંખતુષારાભ, ક્ષીરસમુદ્રજ ચંદ્ર; શંભુમુકુટભૂષણ સોમને નમस्कાર; દ્રૌં સહિત ચંદ્રને નમઃ; ચંદ્ર આવાહન-સ્થાપન.",
      language: "Sanskrit",
      language_gu: "સંસ્કૃત / ગુજરાતી",
      religion: "Hinduism",
      religion_gu: "હિન્દુ ધર્મ"
    },
    {
      id: "savare-ratre-mantra",
      title: "Morning and night routine mantra",
      title_gu: "સવારે ઉઠતી વખતે અને રાત્રે સુતી વખતે બોલવાનો મંત્ર",
      text: "सुखाकारी शुभरात्री सुखाकारी सूर्य\nअमे संसारी अमारु कार्य महा मायाथी मुक्ति\nसर्व कार्य संपन करे।",
      text_gu: "સુખાકારી શુભરાત્રી સુખાકારી સૂર્ય\nઅમે સંસારી અમારુ કાર્ય મહા માયાથી મુક્તિ\nસર્વ કાર્ય સંપન કરે.",
      translation: "Prosperity for the good night, prosperity for the sun (day). We are worldly beings; our mission is liberation from the great illusion. May all tasks be accomplished successfully.",
      translation_gu: "શુભરાત્રિ અને સવારના સૂર્યની સુખાકારી હોજો. અમે સંસારી છીએ, અમારું કાર્ય મહામાયાથી મુક્તિ છે. અમારા સર્વ કાર્યો સંપન્ન કરો.",
      language: "Gujarati",
      language_gu: "ગુજરાતી",
      religion: "Hinduism",
      religion_gu: "હિન્દુ ધર્મ"
    },
    {
      id: "tilak-mantra",
      title: "Mantra While Applying Tilak",
      title_gu: "તિલક લગાવતી વખતે બોલવાનો મંત્ર",
      title_hi: "तिलक लगाते समय मंत्र",
      text: "ललाटे केशवं ध्यायेन्नारायणमथोदरे।\nवक्ष:स्थले माधवं तु गोविन्दं कण्ठकूपके।।\nविष्णुं च दक्षिणे कुक्षौ बाहु च मधुसूदनम्।\nत्रिविक्रमं कन्धरे तु वामनं वामपार्श्वके।।\nश्रीधरं वामबाहु तु हृषीकेशं तु कन्धरे।\nपृष्ठे च पद्मनाभं च कट्यां दामोदरं न्यसेत्।।",
      text_gu: "લલાટે કેશવં ધ્યાયેન્નારાયણમથોદરે।\nવક્ષ:સ્થલે માધવં તુ ગોવિન્દં કણ્ઠકૂપકે।।\nવિષ્ણું ચ દક્ષિણે કુક્ષૌ બાહુ ચ મધુસૂદનમ્।\nત્રિવિક્રમં કન્ધરે તુ વામનં વામપાર્શ્વકે।।\nશ્રીધરં વામબાહુ તુ હૃષીકેશં તુ કન્ધરે।\nપૃષ્ઠે ચ પદ્મનાભં ચ કટ્યાં દામોદરં ન્યસેત્।।",
      text_hi: "ललाटे केशवं ध्यायेन्नारायणमथोदरे।\nवक्ष:स्थले माधवं तु गोविन्दं कण्ठकूपके।।\nविष्णुं च दक्षिणे कुक्षौ बाहु च मधुसूदनम्।\nत्रिविक्रमं कन्धरे तु वामनं वामपार्श्वके।।\nश्रीधरं वामबाहु तु हृषीकेशं तु कन्धरे।\nपृष्ठे च पद्मनाभं च कट्यां दामोदरं न्यसेत्।।",
      notes:
        "तिलक लगाने का स्थान और मंत्र:\n१. माथे पर - श्रीकेशवाय नम:\n२. उदर पर - श्रीनारायणाय नम:\n३. छाती पर - श्रीमाधवाय नम:\n४. कण्ठ पर - श्रीगोविन्दाय नम:\n५. दाईं कमर पर - श्रीविष्णवे नम:\n६. दाईं बाँह पर - श्रीमघुसूदनाय नम:\n७. दायें कंधे पर - श्रीत्रिविक्रमाय नम:\n८. बाईं कमर पर - श्रीवामनाय नम:\n૯. बाईं बाँह पर - श्रीश्रीधराय नम:\n१०. बायें कंधे पर - श्रीहृषीकेशाय नम:\n११. पीछे गर्दन के नीचे - श्रीपद्मनाभाय नम:\n१२. पीठ / कमर पर - श्रीदामोदराय नम:",
      notes_gu:
        "તિલક લગાવવાનું સ્થાન અને મંત્ર:\n૧. કપાળ પર - શ્રી કેશવાય નમઃ\n૨. પેટ પર - શ્રી નારાયણાય નમઃ\n૩. છાતી પર - શ્રી માધવાય નમઃ\n૪. કંઠ પર - શ્રી ગોવિંદાય નમઃ\n૫. જમણી બાજુ કમર પર - શ્રી વિષ્ણવે નમઃ\n૬. જમણી બાજુ હાથ પર - શ્રી મધૂસૂદનાય નમઃ\n૭. જમણા ખભા પર - શ્રી ત્રિવિક્રમાય નમઃ\n૮. ડાબી બાજુ કમર પર - શ્રી વામનાય નમઃ\n૯. ડાબી બાજુ હાથ પર - શ્રી શ્રીધરાય નમઃ\n૧૦. ડાબા ખભા પર - શ્રી હૃષિકેશાય નમઃ\n૧૧. પાછળ ગરદન નીચે - શ્રી પદ્મનાભાય નમઃ\n૧૨. પીઠ (કમર) પર - શ્રી દામોદરાય નમઃ",
      notes_hi:
        "तिलक लगाने का स्थान और मंत्र:\n१. माथे पर - श्रीकेशवाय नम:\n२. उदर पर - श्रीनारायणाय नम:\n३. छाती पर - श्रीमाधवाय नम:\n४. कण्ठ पर - श्रीगोविन्दाय नम:\n५. दाईं कमर पर - श्रीविष्णवे नम:\n६. दाईं बाँह पर - श्रीमघुसूदनाय नम:\n७. दायें कंधे पर - श्रीत्रिविक्रमाय नम:\n८. बाईं कमर पर - श्रीवामनाय नम:\n૯. बाईं बाँह पर - श्रीश्रीधराय नम:\n१०. बायें कंधे पर - श्रीहृषीकेशाय नम:\n११. पीछे गर्दन के नीचे - श्रीपद्मनाभाय नम:\n१२. पीठ / कमर पर - श्रीदामोदराय नम:",
      translation:
        "A sacred verse describing the 12 locations on the body where Tilak should be applied while meditating on different forms of Lord Vishnu (Keshav, Narayan, Madhav, etc.).",
      translation_gu: "ભગવાન વિષ્ણુના ૧૨ સ્વરૂપોના નામ લઈને શરીરના ૧૨ અંગો પર તિલક ધારણ કરવાનો મંત્ર અને વિધિ.",
      language: "Sanskrit",
      language_gu: "સંસ્કૃત / ગુજરાતી",
      religion: "Hinduism",
      religion_gu: "હિન્દુ ધર્મ"
    },
    {
      id: "bhojan-mantra",
      title: "Mantra Before Meals (Bhojan Mantra)",
      title_gu: "ભોજન કરતા પહેલા બોલવાનો મંત્ર",
      title_hi: "भोजन करने से पहले का मंत्र",
      text: "अन्नं ब्रह्म रसो विष्णुः भोक्ता देवो जनार्दनः ।\nइति संचित्य भुञ्जानं दृष्टिदोषो न बाधते ॥",
      text_gu: "અન્નં બ્રહ્મ રસો વિષ્ણુઃ ભોક્તા દેવો જનાર્દનઃ ।\nઇતિ સંચિત્ય ભુઞ્જાનં દૃષ્ટિદોષો ન બાધતે ॥",
      text_hi: "अन्नं ब्रह्म रसो विष्णुः भोक्ता देवो जनार्दनः ।\nइति संचित्य भुञ्जानं दृष्टिदोषो न बाधते ॥",
      translation:
        "Food is Brahma (the Creator), the juice/essence is Vishnu (the Sustainer), and the partaker is the Lord Janardana himself. Thinking thus while eating, one is not affected by the 'evil eye' or negative energies.",
      translation_gu:
        "અન્ન એ બ્રહ્મ છે, તેનો રસ વિષ્ણુ છે અને ભોજન કરનાર સ્વયં જનાર્દન (પરમાત્મા) છે. આવું વિચારીને ભોજન કરવાથી કોઈ પણ પ્રકારનો દૃષ્ટિદોષ લાગતો નથી.",
      translation_hi:
        "अन्न ब्रह्म है, उसका रस विष्णु है और भोजन करने वाला स्वयं जनार्दन (परमात्मा) है। ऐसा सोचकर भोजन करने से किसी भी प्रकार का दृष्टिदोष नहीं लगता।",
      language: "Sanskrit",
      language_gu: "સંસ્કૃત / ગુજરાતી",
      religion: "Hinduism",
      religion_gu: "હિન્દુ ધર્મ"
    }
  ],
  religions: [],
  /**
   * Photo gallery on photos.html
   * Fields: id, src (path from site root, e.g. images/photo.jpg), alt, alt_gu, optional caption, caption_gu, optional width/height
   */
  photos: [
    {
      id: "hero-brahma-banner",
      src: "images/hero-1.svg",
      alt: "Lord Brahma banner with mantra Om Brahmane Namah, lotus and four directions",
      alt_gu: "ભગવાન બ્રહ્મા — ॐ બ્રહ્મણે નમઃ મંત્ર, કમળ અને ચાર દિશાઓ",
      caption: "Home banner — Brahma",
      caption_gu: "મુખપૃષ્ઠ — બ્રહ્મા"
    },
    {
      id: "hero-shiva-banner",
      src: "images/hero-2.svg",
      alt: "Lord Shiva banner with mantra Om Namah Shivaya, moon and trident",
      alt_gu: "ભગવાન શિવ — ॐ નમઃ શિવાય મંત્ર, ચંદ્ર અને ત્રિશૂળ",
      caption: "Home banner — Shiva",
      caption_gu: "મુખપૃષ્ઠ — શિવ"
    },
    {
      id: "hero-vishnu-banner",
      src: "images/hero-3.svg",
      alt: "Lord Vishnu banner with mantra Om Namo Narayanaya, disc and conch motifs",
      alt_gu: "ભગવાન વિષ્ણુ — ॐ નમો નારાયણાય મંત્ર, ચક્ર અને શંખ",
      caption: "Home banner — Vishnu",
      caption_gu: "મુખપૃષ્ઠ — વિષ્ણુ"
    }
  ],
  /**
   * Ṛṣi vaṃśa — list/detail on rishi-vansh.html#slug
   * Fields: id, name, name_gu, optional details/details_gu (intro notes),
   * optional details_notes_heading_en/gu, details_lang (e.g. "hi" for Devanagari),
   * relations: [{ role, role_gu, value, value_gu }] (empty value = shown as dash)
   */
  rishiVansh: [
    {
      id: "durvasa-rishi",
      name: "Durvasa Rishi",
      name_gu: "દુર્વાષા રૂષિ",
      relations: [
        { role: "Father", role_gu: "પિતા", value: "Atri Rishi", value_gu: "અત્રી ઋષિ" },
        { role: "Mother", role_gu: "માતા", value: "Anasuya", value_gu: "અનસોયા માતા" },
        { role: "Brothers", role_gu: "ભાઈ", value: "Chandra and Dattatreya", value_gu: "ચંદ્ર અને દત્ત મહારાજ" },
        { role: "Wife", role_gu: "પત્ની", value: "Kanjari Devi (Kandali Devi)", value_gu: "કંજરી દેવી(કંદલી દેવી)" },
        { role: "Father-in-law", role_gu: "સસરા", value: "Ambarisha Rishi", value_gu: "અંબરીષ રૂષિ" },
        { role: "Mother-in-law", role_gu: "સાસુ", value: "-", value_gu: "-" }
      ]
    },
    {
      id: "dadhichi-rishi",
      name: "Dadhichi Rishi",
      name_gu: "દધીચિ ઋષિ",
      relations: [
        { role: "Father", role_gu: "પિતા", value: "Atharva Rishi", value_gu: "અથર્વ ઋષિ" },
        { role: "Mother", role_gu: "માતા", value: "Shanti", value_gu: "શાંતિ" },
        { role: "Wife", role_gu: "પત્ની", value: "Suvarcha", value_gu: "સુવર્ચા" },
        { role: "Son", role_gu: "પુત્ર", value: "Pippalada", value_gu: "પીપલાદ" }
      ]
    },
    {
      id: "prahlad",
      name: "Prahlad",
      name_gu: "પ્રહલાદ",
      relations: [
        { role: "Father", role_gu: "પિતા", value: "Hiranyakashipu", value_gu: "હિરણ્યકશિપુ" },
        { role: "Mother", role_gu: "માતા", value: "Kayadhu (Daughter of Jambhasura)", value_gu: "કયાધુ (જંભાસુરની દીકરી)" },
        { role: "Guru", role_gu: "ગુરુ", value: "Shri Bai Mata, Uddalaka Rishi", value_gu: "શ્રી બાઈ માતા, ઉદ્દાલક ઋષિ" }
      ],
      details: "Recite the name of your Gotraguru and mention your caste.\nRecite the name of Dadhichi Rishi.\nWhen circumambulating Holika with your nephew (Bhaniya), recite all the above names along with Lord Narsingh's name and pray for blessings for him.",
      details_gu: "ગોત્રગુરુનું નામ લેવું, પોતાની જાતિ કહેવી.\nદધીચિ ઋષિનું નામ લેવું.\nભાણિયાને હોલિકાની પ્રદક્ષિણા ફેરવતી વખતે ઉપરના બધા નામ લેવાના અને નૃસિંહ ભગવાનનું નામ લઈને કહેવાનું કે અમારા ભાણિયાને આશીર્વાદ આપજો."
    },
    {
      id: "uddalaka-rishi",
      name: "Uddalaka Rishi",
      name_gu: "ઉદાલક ઋષિ",
      relations: [
        { role: "Son", role_gu: "પુત્ર", value: "Shvetaketu", value_gu: "શ્વેતકેતુ" },
        { role: "Daughter", role_gu: "પુત્રી", value: "Sujata", value_gu: "સુજાતા" }
      ]
    },
    {
      id: "ashtavakra-muni",
      name: "Ashtavakra Muni",
      name_gu: "અષ્ટાવક્ર મુનિ",
      relations: [
        { role: "Father", role_gu: "પિતા", value: "Kahoda Rishi", value_gu: "કહોડ ઋષિ" },
        { role: "Mother", role_gu: "માતા", value: "Sujata", value_gu: "સુજાતા" }
      ]
    },
    {
      id: "kamadeva",
      name: "Kamadeva",
      name_gu: "કામદેવ",
      relations: [
        { role: "Father", role_gu: "પિતા", value: "Vishnu", value_gu: "વિષ્ણુ" },
        { role: "Mother", role_gu: "માતા", value: "Lakshmi", value_gu: "લક્ષ્મી" },
        { role: "Wife", role_gu: "પત્ની", value: "Rati", value_gu: "રતી" }
      ]
    },
    {
      id: "bhakt-dhruvji",
      name: "Bhakt Dhruvji",
      name_gu: "ભક્ત ધ્રુવજી",
      relations: [
        { role: "Mother", role_gu: "માતા", value: "Suniti", value_gu: "સુનીતી" },
        { role: "Father", role_gu: "પિતા", value: "", value_gu: "" }
      ]
    },
    {
      id: "sant-tulsidas",
      name: "Sant Tulsidas",
      name_gu: "સંત તુલસીદાસ",
      relations: [
        { role: "Father", role_gu: "પિતા", value: "Atmaram Dubey", value_gu: "આત્મારામ દુબે" },
        { role: "Mother", role_gu: "માતા", value: "Tulsi", value_gu: "તુલસી" },
        { role: "Wife", role_gu: "પત્ની", value: "Ratnavali", value_gu: "રત્નાવલી" }
      ]
    },
    {
      id: "shrutashrava-rishi",
      name: "Shrutashrava Rishi",
      name_gu: "શ્રુતશ્રવા ઋષિ",
      relations: [
        { role: "Son", role_gu: "પુત્ર", value: "Somashrava", value_gu: "સોમશ્રવા" }
      ]
    },
    {
      id: "rishi-kashyap-vansh",
      name: "Rishi Kashyap — two wives: Vinata and Kadru",
      name_gu: "ઋષિ કશ્યપ — બે પત્ની: વિનતા અને કદ્રુ",
      details:
        "The Purāṇas describe many Nāgas in detail — especially Vasuki, Shesha, Padma, Kambala, Karkotaka, Dhritarashtra, Shankhapala, Kalakhya, Takshaka, Pingala, Mahānāga, and others. (Your note also links this lore to Khodiyar Mātā’s father.)",
      details_gu:
        "પુરાણોમાં ઘણા નાગોનું વર્ણન મળે છે — ખાસ કરીને વાસુકી, શેષ, પદ્મ, કંબલ, કર્કોટક, ધૃતરાષ્ટ્ર, શંખપાલ, કાલાખ્ય, તક્ષક, પિંગલ, મહાનાગ વગેરે.\n→ નોંધ: ખોડીયાર માંના પિતા (સંદર્ભ).",
      relations: [
        {
          role: "Two wives of Kashyap",
          role_gu: "કશ્યપની બે પત્ની",
          value: "Vinata and Kadru",
          value_gu: "વિનતા અને કદ્રુ"
        },
        {
          role: "Kadru — children",
          role_gu: "કદ્રુના ગર્ભથી",
          value: "Nāgas (serpents) were born",
          value_gu: "સાપ પેદા થયા"
        },
        {
          role: "Vinata — first two sons",
          role_gu: "વિનતાનાં ગર્ભથી બે પુત્ર",
          value: "(1) Garuda (2) Aruna",
          value_gu: "(1) ગરુડ (2) અરુણ"
        },
        {
          role: "Vinata — next four sons",
          role_gu: "ગરુડ અને અરુણ પછી વિનતાને ચાર પુત્ર",
          value: "Tarkshya; Arishtanemi; Aphani; Varuna",
          value_gu: "તાર્ક્ષ્ય; અરિષ્ટનેમી; આફણી; વારુણ"
        },
        {
          role: "Garuda’s sons",
          role_gu: "ગરુડનાં બે પુત્ર",
          value: "(1) Sampati (elder) (2) Jatayu (younger)",
          value_gu: "(1) સંપાતી (મોટો) (2) જટાયુ (નાનો)"
        }
      ]
    },
    {
      id: "dattatreya-24-gurus",
      name: "Bhagavan Dattatreya — 24 gurus",
      name_gu: "ભગવાન દત્તાત્રેય — ૨૪ ગુરુ",
      details_notes_heading_en: "Hindi (Devanagari)",
      details_lang: "hi",
      details:
        "(1) पृथ्वी\n(2) पिंगला वेश्या\n(3) कबूतर\n(4) सूर्य\n(5) वायु\n(6) हिरण\n(7) समुद्र\n(8) पतंगा\n(9) हाथी\n(10) आकाश\n(11) जल\n(12) मधुमक्खी\n(13) मछली\n(14) कुरर पक्षी\n(15) बालक\n(16) आग\n(17) चन्द्रमा\n(18) कुमारी कन्या\n(19) शरकृत या तीर बनाने वाला\n(20) सांप\n(21) मकड़ी\n(22) भृंगी कीड़ा\n(23) भौंरा\n(24) अजगर",
      details_gu:
        "(1) પૃથ્વી\n(2) પિંગલા વેશ્યા\n(3) કબૂતર\n(4) સૂર્ય\n(5) વાયુ\n(6) હરિણ\n(7) સમુદ્ર\n(8) પતંગા\n(9) હાથી\n(10) આકાશ\n(11) જળ\n(12) મધમાખી\n(13) માછલી\n(14) કુરર પક્ષી\n(15) બાળક\n(16) આગ\n(17) ચંદ્રમા\n(18) કુમારી કન્યા\n(19) શરકૃત / તીર બનાવનાર\n(20) સાપ\n(21) મકડી\n(22) ભૃંગી કીડો\n(23) ભૌંરા\n(24) અજગર",
      relations: [
        {
          role: "Tradition",
          role_gu: "પરંપરા",
          value: "24 natural and human teachers (Dattatreya)",
          value_gu: "૨૪ પ્રાકૃતિક અને માનવ ગુરુ (દત્તાત્રેય)"
        }
      ]
    },
    {
      id: "sant-kabir",
      name: "Sant Kabir",
      name_gu: "સંત કબીર",
      relations: [
        { role: "Father", role_gu: "પિતા", value: "Niru", value_gu: "નિરુ" },
        { role: "Mother", role_gu: "માતા", value: "Nima", value_gu: "નિમા" },
        {
          role: "Gurus",
          role_gu: "ગુરુ",
          value: "Sudan Rishi; Ramanand Swami",
          value_gu: "સુદાન ઋષિ; રામાનંદ સ્વામી"
        },
        {
          role: "Ramanand Swami’s parents",
          role_gu: "રામાનંદ સ્વામીના માતા-પિતા",
          value: "Mother: Sushila; Father: Bhuri Karma",
          value_gu: "માતા: સુશીલા; પિતા: ભૂરી કર્મા"
        },
        { role: "Wife", role_gu: "પત્ની", value: "Loi", value_gu: "લોઈ" },
        { role: "Son", role_gu: "પુત્ર", value: "Kamal", value_gu: "કમાલ" },
        { role: "Daughter", role_gu: "પુત્રી", value: "Kamali", value_gu: "કમાલી" }
      ]
    },
    {
      id: "shani-maharaj",
      name: "Shani Maharaj",
      name_gu: "શનિ મહારાજ",
      relations: [
        { role: "Father", role_gu: "પિતા", value: "Surya", value_gu: "સૂર્ય" },
        { role: "Mother", role_gu: "માતા", value: "Chhaya", value_gu: "છાયા" },
        {
          role: "Brothers",
          role_gu: "ભાઈ",
          value: "Yamraj; Karna; Sugriva",
          value_gu: "યમરાજ; કર્ણ; સુગ્રીવ"
        },
        { role: "Sister", role_gu: "બહેન", value: "Yamunaji", value_gu: "યમુનાજી" },
        {
          role: "Lord of (adhipati)",
          role_gu: "અધિપતી",
          value: "Night (Rātri)",
          value_gu: "રાત્રિ"
        },
        {
          role: "Wife",
          role_gu: "પત્ની",
          value: "Damini",
          value_gu: "દામિની"
        }
      ]
    },
    {
      id: "shri-ganesh-vansh",
      name: "Shri Ganesh",
      name_gu: "શ્રી ગણેશ",
      details_notes_heading_en: "Hindi (Devanagari)",
      details_lang: "hi",
      details: "गणेशजी की बहन का नाम अशोक सुंदरी है।",
      details_gu: "ગણેશજીની બહેનનું નામ અશોક સુંદરી છે.",
      relations: [
        { role: "Father", role_gu: "પિતા", value: "Kashyapa (Kasyapa)", value_gu: "કશ્યપ" },
        { role: "Mother", role_gu: "માતા", value: "Aditi Mata", value_gu: "અદિતિ માતા" },
        { role: "Sister", role_gu: "બહેન", value: "Ashok Sundari", value_gu: "અશોક સુંદરી" },
        {
          role: "Wives (five)",
          role_gu: "પત્નીઓ (પાંચ)",
          value: "Riddhi; Siddhi; Tushti; Pushti; Shri",
          value_gu: "રિદ્ધિ; સિદ્ધિ; તુષ્ટિ; પુષ્ટિ; શ્રી"
        },
        {
          role: "Sons (two)",
          role_gu: "પુત્રો (બે)",
          value: "Labh; Shubh",
          value_gu: "લાભ; શુભ"
        },
        {
          role: "Grandsons (sons of Labh & Shubh)",
          role_gu: "પૌત્રો (લાભ અને શુભના પુત્રો)",
          value: "Amod; Pramod",
          value_gu: "આમોદ; પ્રમોદ"
        }
      ]
    },
    {
      id: "shri-hanuman-vansh",
      name: "Shri Hanuman",
      name_gu: "શ્રી હનુમાન",
      details:
        "Eight siddhis: Aṇimā, Mahimā, Garimā, Laghimā, Prāpti, Prākāmya, Īśitva, Vaśitva.\n\nNine nidhis: Padma, Mahāpadma, Nīla, Mukunda, Nanda, Makara, Kachchapa, Śaṅkha, Kherva.\n\nMother Anjanī was formerly the apsarā Puñjikasthalā.\n\nMakardhvaja was so named because he was born from a makara (sea creature). Marriage to Suvarcalā was nominal — performed to satisfy a condition so Hanuman could receive knowledge from Sūrya.",
      details_gu:
        "આઠ સિદ્ધિઓ: અણિમા, મહિમા, ગરિમા, લઘિમા, પ્રાપ્તિ, પ્રાકામ્ય, ઈશિત્વ, વશિત્વ.\n\nનવ નિધિઓ: પદ્મ નિધિ, મહાપદ્મ નિધિ, નીલ નિધિ, મુકુન્દ નિધિ, નન્દ નિધિ, મકર નિધિ, કચ્છપ નિધિ, શંખ નિધિ, ખર્વ નિધિ.\n\nમાતા અંજની પહેલાં અપ્સરા પુંજિકસ્થળા હતા.\n\nમકરથી જન્મ થયો એટલે નામ મકરધ્વજ. સુવર્ચલા સાથે લગ્ન નામમાત્રનું — સૂર્ય પાસેથી વિદ્યા મેળવવા શરત પૂરી કરવા.",
      relations: [
        {
          role: "Father",
          role_gu: "પિતા",
          value: "Pavanadev (wind deity)",
          value_gu: "પવનદેવ"
        },
        { role: "Mother", role_gu: "માતા", value: "Anjani", value_gu: "અંજની" },
        { role: "Wife", role_gu: "પત્ની", value: "Suvarcala", value_gu: "સુવર્ચલા" },
        { role: "Son", role_gu: "પુત્ર", value: "Makardhvaja", value_gu: "મકરધ્વજ" }
      ]
    },
    {
      id: "bhishma-pitamah-kuru",
      name: "Bhishma Pitamah (Kuru line)",
      name_gu: "ભીષ્મ પિતામહ (કુરુ વંશ)",
      details:
        "Bhishma was the son of Maharaja Shantanu of Hastinapur and Gaṅgā. Shantanu later married Satyavati. She had two sons: Chitrāṅgada (elder) and Vicitravīrya (younger). After Shantanu’s death, the elder son ruled Hastinapur and soon fell in battle. The younger son then ascended the throne; he is noted here as having three sons: Dhṛtarāṣṭra, Pāṇḍu, and Vidura.",
      details_gu:
        "ભીષ્મ હસ્તિનાપુરનાં મહારાજ શાંતનુ અને ગંગાનો પુત્ર છે. શાંતનુનાં લગ્ન સત્યવતી સાથે થયાં. સત્યવતીનાં બે પુત્ર: (૧) ચિત્રાંગદ (૨) વિચિત્રવીર્ય. શાંતનુના મૃત્યુ પછી સત્યવતીનો મોટો પુત્ર હસ્તિનાપુરનો રાજા થયો અને થોડા સમયમાં યુદ્ધમાં મૃત્યુ પામ્યો. તેની મૃત્યુ પછી બીજો પુત્ર સિંહાસન પર બેઠો. તેનાં ત્રણ પુત્ર: (૧) ધૃતરાષ્ટ્ર (૨) પાંડુ (૩) વિદુર.",
      relations: [
        {
          role: "Father",
          role_gu: "પિતા",
          value: "Shantanu, Maharaja of Hastinapur",
          value_gu: "શાંતનુ, હસ્તિનાપુરના મહારાજ"
        },
        { role: "Mother", role_gu: "માતા", value: "Gaṅgā", value_gu: "ગંગા" },
        {
          role: "Father's wife (stepmother line)",
          role_gu: "પિતાની પત્ની (સત્યવતી વંશ)",
          value: "Satyavati",
          value_gu: "સત્યવતી"
        },
        {
          role: "Half-brothers (Shantanu & Satyavati)",
          role_gu: "સહોદર (શાંતનુ અને સત્યવતીના પુત્રો)",
          value: "Chitrāṅgada (elder); Vicitravīrya (younger)",
          value_gu: "ચિત્રાંગદ (મોટો); વિચિત્રવીર્ય (નાનો)"
        },
        {
          role: "Sons of Vicitravīrya (as noted)",
          role_gu: "વિચિત્રવીર્યના પુત્રો (નોંધ મુજબ)",
          value: "Dhṛtarāṣṭra; Pāṇḍu; Vidura",
          value_gu: "ધૃતરાષ્ટ્ર; પાંડુ; વિદુર"
        }
      ]
    },
    {
      id: "agnideva",
      name: "Agnideva (Havyavahak)",
      name_gu: "અગ્નિદેવ (હવ્યવાહક)",
      details_notes_heading_en: "Hindi (Devanagari)",
      details_lang: "hi",
      details:
        "दक्ष की कन्या स्वाहा का विवाह अग्निदेव से हुआ।\nअनुसार अग्निदेव की पत्नी स्वाहा के पावक, पवमान और शुचि नामक तीन पुत्र हुए।",
      details_gu:
        "દક્ષની પુત્રી સ્વાહાનું લગ્ન અગ્નિદેવ સાથે થયેલું.\nઅગ્નિદેવની પત્ની સ્વાહાથી પાવક, પવમાન અને શુચિ નામના ત્રણ પુત્ર થયા.",
      relations: [
        { role: "Wife", role_gu: "પત્ની", value: "Swaha", value_gu: "સ્વાહા" },
        {
          role: "Sons",
          role_gu: "પુત્ર",
          value: "Pavaka; Pavamana; Shuchi",
          value_gu: "પાવક; પવમાન; શુચિ"
        }
      ]
    },
    {
      id: "atri-rishi",
      name: "Atri Rishi",
      name_gu: "અત્રિ ઋષિ",
      details_notes_heading_en: "Hindi (Devanagari)",
      details_lang: "hi",
      details:
        "अत्रि ऋषि की पत्नी और ब्रह्मवादिनी (सन्न्यासिनी) सती अनसूया थीं।\n\nपुत्र: (1) दुर्वासा ऋषि (2) चन्द्र (3) दत्तात्रेय।\n\nचन्द्रमा ने बृहस्पति की पत्नी तारा से विवाह किया, जिनसे बुध उत्पन्न हुए।\n\nवंश क्रम (संक्षेप): अत्रि → चन्द्र → बुध → पुरूरवा → आयु → नहुष → यति/ययाति।\n\nययाति के पाँच पुत्र माने जाते हैं: पुरु, यदु, तुर्वसु, अनु, द्रुह्यु।",
      details_gu:
        "અત્રિ ઋષિની પત્ની અને બ્રહ્મવાદિની (સંન્યાસિની) સતી અનસૂયા હતાં.\n\nપુત્ર: (1) દુર્વાસા ઋષિ (2) ચંદ્ર (3) દત્તાત્રેય.\n\nચંદ્રમાએ બૃહસ્પતિની પત્ની તારા સાથે લગ્ન કર્યા, જેથી બુધનો જન્મ થયો.\n\nવંશક્રમ (સારાંશ): અત્રિ → ચંદ્ર → બુધ → પુરુરવા → આયુ → નહુષ → યતિ/યયાતિ.\n\nયયાતિના પાંચ પુત્ર: પુરુ, યદુ, તુર્વસુ, અનુ, દ્રુહ્યુ.",
      relations: [
        { role: "Wife", role_gu: "પત્ની", value: "Anasuya", value_gu: "અનસૂયા" },
        {
          role: "Sons",
          role_gu: "પુત્ર",
          value: "Durvasa Rishi; Chandra; Dattatreya",
          value_gu: "દુર્વાસા ઋષિ; ચંદ્ર; દત્તાત્રેય"
        },
        {
          role: "Lineage note",
          role_gu: "વંશ નોંધ",
          value: "Chandra -> Budha -> Pururava -> Ayu -> Nahusha -> Yati/Yayati",
          value_gu: "ચંદ્ર -> બુધ -> પુરુરવા -> આયુ -> નહુષ -> યતિ/યયાતિ"
        }
      ]
    },
    {
      id: "arundhati",
      name: "Arundhati",
      name_gu: "અરુંધતિ",
      details_notes_heading_en: "Hindi (Devanagari)",
      details_lang: "hi",
      details: "अरुंधति ऋषि वशिष्ठ की पत्नी थीं।",
      details_gu: "અરુંધતિ ઋષિ વશિષ્ઠની પત્ની હતાં.",
      relations: [
        { role: "Husband", role_gu: "પતિ", value: "Rishi Vashishtha", value_gu: "ઋષિ વશિષ્ઠ" }
      ]
    },
    {
      id: "rishi-parashar",
      name: "Rishi Parashar",
      name_gu: "ઋષિ પરાશર",
      details_notes_heading_en: "Hindi (Devanagari)",
      details_lang: "hi",
      details:
        "ऋषि पराशर वेदव्यास कृष्ण द्वैपायन के पिता थे।\nमुनि शक्ति के पुत्र तथा महर्षि वशिष्ठ के पौत्र थे ऋषि पराशर।\nइनके जन्म की कथा अनुसार यह ऋषि पराशर के पुत्र थे, इनकी माता का नाम सत्यवती था। सत्यवती का नाम मत्स्यगंधा भी था।",
      details_gu:
        "ઋષિ પરાશર વેદવ્યાસ કૃષ્ણ દ્વૈપાયનના પિતા હતા.\nઋષિ પરાશર મુનિ શક્તિના પુત્ર અને મહર્ષિ વશિષ્ઠના પૌત્ર હતા.\nકથા અનુસાર તેમના પુત્ર વેદવ્યાસની માતા સત્યવતી હતા. સત્યવતીને મત્સ્યગંધા નામે પણ ઓળખવામાં આવતી હતી.",
      relations: [
        { role: "Father", role_gu: "પિતા", value: "Muni Shakti", value_gu: "મુનિ શક્તિ" },
        { role: "Grandfather", role_gu: "દાદા", value: "Maharshi Vashishtha", value_gu: "મહર્ષિ વશિષ્ઠ" },
        { role: "Partner", role_gu: "પત્ની / સંગિની", value: "Satyavati (Matsyagandha)", value_gu: "સત્યવતી (મત્સ્યગંધા)" },
        { role: "Son", role_gu: "પુત્ર", value: "Veda Vyasa (Krishna Dvaipayana)", value_gu: "વેદ વ્યાસ (કૃષ્ણ દ્વૈપાયન)" }
      ]
    },
    {
      id: "daksha-prajapati",
      name: "Daksha Prajapati",
      name_gu: "દક્ષ પ્રજાપતિ",
      details_notes_heading_en: "Hindi (Devanagari)",
      details_lang: "hi",
      details:
        "ब्रह्मा जी ने दक्षा को अपने मानस पुत्र के रूप में रचा।\nप्रजापति दक्ष की दो पत्नियां थीं — प्रसूति और वीरणी।\nदक्ष प्रजापति का विवाह स्वयंभुव मनु की तृतीया कन्या प्रसूति से हुआ था।\nप्रसूति से दक्ष को 24 कन्याएं और वीरणी से 60 कन्याएं हुईं — कुल 84 पुत्रियां, जिनसे देव, गन्धर्व, अप्सराएं, पक्षी, पशु आदि सृष्टियां उत्पन्न हुईं।\nप्रसूति की 24 पुत्रियां: श्रद्धा, लक्ष्मी, धृति, तुष्टि, पुष्टि, मेधा, क्रीया, बुद्धि, लज्जा, वसु, शांति, सिद्धि, कीर्ति, इत्यादि… सती, स्मृति, प्रीति, क्षमा, सन्नति, अनुसूया, उर्जा, स्वाहा और स्वधा।\nस्वायंभुव मनु की पुत्री प्रसूति से उत्पन्न कन्याओं में से — स्वाहा का विवाह अग्निदेव से, सती का विवाह भगवान शंकर से, तथा शेष तेरह कन्याओं का धर्म से विवाह हुआ।\nधर्म की पत्नियां (दक्ष-कन्याएं) — श्रद्धा, मेधा, दया, शांति, तुष्टि, पुष्टि, क्रिया, उन्नति, बुद्धि, प्रज्ञा, तितिक्षा, व्रती और मूर्ति।",
      details_gu:
        "બ્રહ્માએ દક્ષનું માનસપુત્ર રૂપે સર્જન કર્યું. દક્ષની બે પત્નીઓ — પ્રસૂતિ અને વીરણી. સ્વાયંભુ મનુની પુત્રી પ્રસૂતિ સાથે દક્ષનું લગ્ન થયું. પ્રસૂતિથી 24 અને વીરણીથી 60 — એમ કુલ 84 પુત્રીઓ જન્મી. પ્રસૂતિની પુત્રીઓમાં ‘સતી, સ્મૃતિ, પ્રીતિ, ક્ષમા, સન્નતિ, અનસૂયા, ઊર્જા, સ્વાહા, સ્વધા’ વગેરે ઉલ્લેખનીય છે. સ્વાહાનું લગ્ન અગ્નિદેવ સાથે, સતીનું લગ્ન શિવ સાથે તથા બાકીની ત્રેયોદશનો ધર્મ સાથે લગ્ન થયેલો ઉલ્લેખ આવે છે. ધર્મની પત્નીઓ — શ્રદ્ધા, મેધા, દયા, શાંતિ, તૃષ્ટિ, પુષ્ટિ, ક્રિયા, ઉન્નતિ, બુદ્ધિ, પ્રજ્ઞા, તિતિક્ષા, વ્રતી અને મૂર્તિ.",
      relations: [
        { role: "Father", role_gu: "પિતા", value: "Brahma (Manas putra)", value_gu: "બ્રહ્મા (માનસપુત્ર)" },
        {
          role: "Wives",
          role_gu: "પત્નીઓ",
          value: "Prasuti (24 daughters); Virini (60 daughters)",
          value_gu: "પ્રસૂતિ (24 પુત્રીઓ); વીરણી (60 પુત્રીઓ)"
        },
        {
          role: "Daughter → husband",
          role_gu: "પુત્રી → પતિ",
          value: "Svaha → Agnideva; Sati → Bhagavan Shankar; 13 daughters → Dharma",
          value_gu: "સ્વાહા → અગ્નિદેવ; સતી → ભગવાન શંકર; 13 પુત્રીઓ → ધર્મ"
        }
      ]
    },
    {
      id: "nandi",
      name: "Nandiji (Nandi)",
      name_gu: "નંદીજી",
      details_gu:
        "નંદીજીનો પરિવાર",
      relations: [
        { role: "Father", role_gu: "પિતા", value: "Shilad", value_gu: "શીલાદ" },
        { role: "Mother", role_gu: "માતા", value: "Suvacha", value_gu: "સુવાચા" },
        {
          role: "Wife",
          role_gu: "પત્ની",
          value: "Suyasha (daughter of Maruto Rishi)",
          value_gu: "સુયાશા (સુયાશાના પિતા મરુતો ઋષિ)"
        }
      ]
    },
    {
      id: "rama-ancestors",
      name: "Ancestors of Lord Rama (Suryavamsha)",
      name_gu: "ભગવાન શ્રી રામના પૂર્વજો (સૂર્યવંશ)",
      name_hi: "भगवान श्री राम के पूर्वज (सूर्यवंश)",
      details:
        "Lineage of Lord Rama (Backward):\n1. Dasharatha (Father)\n2. Aja (Grandfather)\n3. Nabhaga\n4. Yayati\n5. Nahusha\n6. Ambarisha\n7. Prashushruka\n8. Maru\n9. Shighraga\n10. Agnivarna\n11. Sudarshana\n12. Shankhana\n13. Pravriddha\n14. Raghu",
      details_gu:
        "ભગવાન શ્રી રામના પૂર્વજો (ઉલટા ક્રમમાં):\n૧. રામ ના પિતા : દશરથ\n૨. દશરથ ના પિતા : અજ\n૩. અજ ના પિતા : નાભાગ\n૪. નાભાગ ના પિતા : યયાતિ\n૫. યયાતિ ના પિતા : નહુષ\n૬. નહુષ ના પિતા : અંબરીશ\n૭. અંબરીશ ના પિતા : પ્રશુશ્રુક\n૮. પ્રશુશ્રુક ના પિતા : મરૂ\n૯. મરૂ ના પિતા : શીઘ્રગ\n૧૦. શીઘ્રગ ના પિતા : અગ્નીવર્ણ\n૧૧. અગ્નીવર્ણ ના પિતા : સુદર્શન\n૧૨. સુદર્શન ના પિતા : શંખણ\n૧૩. શંખણ ના પિતા : પ્રવૃદ્ધ\n૧૪. પ્રવૃદ્ધ ના પિતા : રઘુ",
      details_hi:
        "भगवान श्री राम के पूर्वज (उलटे क्रम में):\n१. राम के पिता : दशरथ\n२. दशरथ के पिता : अज\n३. अज के पिता : नाभाग\n४. नाभाग के पिता : ययाति\n५. ययाति के पिता : नहुष\n६. नहुष के पिता : अंबरीष\n७. अंबरीष के पिता : प्रशुश्रुक\n८. प्रशुश्रुक के पिता : मरु\n९. मरु के पिता : शीघ्रग\n१०. शीघ्रग के पिता : अग्निवर्ण\n११. अग्निवर्ण के पिता : सुदर्शन\n१२. सुदर्शन के पिता : शंखण\n१३. शंखण के पिता : प्रवृद्ध\n१४. प्रवृद्ध के पिता : रघु"
    },
    {
      id: "ramayana-wives",
      name: "Ramayana Characters and Wives",
      name_gu: "રામાયણના પાત્રો અને તેમની પત્નીઓના નામ",
      name_hi: "रामायण के पात्र और उनकी पत्नियों के नाम",
      details:
        "Main characters and their spouses:\n- Rama: Sita\n- Lakshmana: Urmila\n- Bharata: Mandavi\n- Shatrughna: Shrutakirti\n- King Janaka: Sunayana\n- Vashishtha: Arundhati\n- Dasharatha: Kausalya, Kaikeyi, Sumitra\n- Ravana: Mandodari\n- Vibhishana: Sarama\n- Meghanada: Sulochana\n- Kumbhakarna: Vajra\n- Bali: Tara\n- Sugriva: Ruma\n- Pururava (Prem): Urvashi\n- Kusha: Nagak Kumudini\n- Rishyasringa: Shanta\n- Atri: Anasuya\n- Vishrava: Kaikesi\n- Sumali: Ketumati",
      details_gu:
        "મુખ્ય પાત્રો અને તેમની પત્નીઓના નામ:\n૧. શ્રી રામની પત્ની : સીતા\n૨. લક્ષ્મણ પત્ની : ઉર્મિલા\n૩. ભરત પત્ની : માંડવી\n૪. શત્રુઘ્ન પત્ની : શ્રુતકીર્તિ\n૫. રાજા જનકની પત્ની : સુનયના\n૬. વશિષ્ઠની પત્ની : અરુંધતી\n૭. દશરથ પત્ની : કૌસલ્યા, કૈકેયી, સુમિત્રા\n૮. રાવણની પત્ની : મંદોદરી\n૯. વિભીષણ પત્ની : શર્મા (સરમા)\n૧૦. મેઘનાદના પત્ની : સુલોચના\n૧૧. કુંભકર્ણ પત્ની : વજ્ર\n૧૨. બાલી પત્ની : તારા\n૧૩. સુગ્રીવ પત્ની : રૂમા\n૧૪. પ્રેમ (પુરૂરવા) પત્ની : ઉરુવશી\n૧૫. કુશ પત્ની : નાગક કુમુદીન\n૧૬. ઋષ્યશ્રૃંગા પત્ની : શાંતા\n૧૭. અત્રિ ઋષિ પત્ની : અનસૂયા\n૧૮. વિશ્રવા ઋષિ પત્ની : કૈકસી\n૧૯. સુમાલી પત્ની : કેતુમતી",
      details_hi:
        "मुख्य पात्र और उनकी पत्नियों के नाम:\n१. श्री राम की पत्नी : सीता\n२. लक्ष्मण पत्नी : उर्मिला\n३. भरत पत्नी : मांडवी\n४. शत्रुघ्न पत्नी : श्रुतकीर्ति\n५. राजा जनक की पत्नी : सुनयना\n६. वशिष्ठ की पत्नी : अरुंधति\n७. दशरथ पत्नी : कौशल्या, कैकेयी, सुमित्रा\n८. रावण की पत्नी : मंदोदरी\n९. विभीषण पत्नी : सरमा\n१०. मेघनाद की पत्नी : सुलोचना\n११. कुंभकर्ण पत्नी : वज्र\n१२. बाली पत्नी : तारा\n१३. सुग्रीव पत्नी : रूमा\n१४. पुरूरवा (प्रेम) की पत्नी : उर्वशी\n१५. कुश की पत्नी : नागक कुमुदिनी\n१६. ऋष्यश्रृंग की पत्नी : शांता\n१७. अत्रि ऋषि की पत्नी : अनसूया\n१८. विश्रवा ऋषि की पत्नी : कैकसी\n१९. सुमाली की पत्नी : केतुमती"
    }
  ]
};
