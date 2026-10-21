import React, { useState, useEffect, useMemo } from 'react';
import { 
  Check, Search, Grid, List, Repeat, Trophy, Copy, 
  CheckCircle2, Edit3, Save, X
} from 'lucide-react';

// ============================================================================
// SET 1 : KONOHA SHIDŌ (158 RÉFÉRENCES OFFICIELLES)
// ============================================================================
const RAW_SET1_DATA = [
  ["ks-000", "000/130", "Naruto Uzumaki", "Je serai le plus grand Hokage !", "L", "Konoha", 9, 6, "Legendary Or 22K (1re Éd: Naruto / 2e Éd: Sasuke & Lee)"],
  ["ks-001", "001/130", "Hiruzen Sarutobi", "Le Professeur", "C", "Konoha", 5, 4, ""],
  ["ks-002", "002/130", "Hiruzen Sarutobi", "Troisième Hokage", "UC", "Konoha", 6, 4, ""],
  ["ks-003", "003/130", "Tsunade", "Maître Ninja Médical", "C", "Konoha", 4, 3, ""],
  ["ks-004", "004/130", "Tsunade", "La Création et le Renouveau", "UC", "Konoha", 6, 4, ""],
  ["ks-005", "005/130", "Shizune", "Assistante de Tsunade", "C", "Konoha", 2, 2, ""],
  ["ks-006", "006/130", "Shizune", "Tir d'Aiguilles préparé", "UC", "Konoha", 3, 2, ""],
  ["ks-007", "007/130", "Jiraiya", "Ermite des Crapauds", "C", "Konoha", 4, 3, ""],
  ["ks-008", "008/130", "Jiraiya", "Doton, Les Marécages des Limbes", "UC", "Konoha", 6, 4, ""],
  ["ks-009", "009/130", "Naruto Uzumaki", "Genin du Village de la Feuille", "C", "Konoha", 2, 1, ""],
  ["ks-010", "010/130", "Naruto Uzumaki", "Permutation", "C", "Konoha", 2, 1, ""],
  ["ks-011", "011/130", "Sakura Haruno", "Genin de l'Équipe 7", "C", "Konoha", 2, 1, ""],
  ["ks-012", "012/130", "Sakura Haruno", "Maîtrise du Chakra", "UC", "Konoha", 3, 2, ""],
  ["ks-013", "013/130", "Sasuke Uchiwa", "Dernier du Clan Uchiwa", "C", "Konoha", 3, 2, ""],
  ["ks-014", "014/130", "Sasuke Uchiwa", "Sharingan", "UC", "Konoha", 4, 2, ""],
  ["ks-015", "015/130", "Kakashi Hatake", "Sensei de l'Équipe 7", "C", "Konoha", 4, 3, ""],
  ["ks-016", "016/130", "Kakashi Hatake", "Sharingan", "UC", "Konoha", 5, 3, ""],
  ["ks-017", "017/130", "Chôji Akimichi", "Décuplement", "C", "Konoha", 2, 2, ""],
  ["ks-018", "018/130", "Chôji Akimichi", "Le Boulet Humain", "UC", "Konoha", 3, 2, ""],
  ["ks-019", "019/130", "Ino Yamanaka", "Genin de l'Équipe 10", "C", "Konoha", 2, 1, ""],
  ["ks-020", "020/130", "Ino Yamanaka", "Transposition", "UC", "Konoha", 3, 2, ""],
  ["ks-021", "021/130", "Shikamaru Nara", "Genin de l'Équipe 10", "C", "Konoha", 2, 1, ""],
  ["ks-022", "022/130", "Shikamaru Nara", "Manipulation des Ombres", "UC", "Konoha", 3, 2, ""],
  ["ks-023", "023/130", "Asuma Sarutobi", "Sensei de l'Équipe 10", "C", "Konoha", 4, 3, ""],
  ["ks-024", "024/130", "Asuma Sarutobi", "Lame de Chakra", "UC", "Konoha", 5, 3, ""],
  ["ks-025", "025/130", "Kiba Inuzuka", "Genin de l'Équipe 8", "C", "Konoha", 2, 1, ""],
  ["ks-026", "026/130", "Kiba Inuzuka", "Ninpô ! La Danse du Chien !", "UC", "Konoha", 3, 2, ""],
  ["ks-027", "027/130", "Akamaru", "Chien Ninja", "C", "Konoha", 1, 1, ""],
  ["ks-028", "028/130", "Akamaru", "Les Hommes-Bêtes Enragés", "UC", "Konoha", 2, 1, ""],
  ["ks-029", "029/130", "Akamaru", "Le Loup Bicéphale", "UC", "Konoha", 4, 3, ""],
  ["ks-030", "030/130", "Hinata Hyûga", "Poing Souple", "C", "Konoha", 2, 1, ""],
  ["ks-031", "031/130", "Hinata Hyûga", "Byakugan", "UC", "Konoha", 3, 2, ""],
  ["ks-032", "032/130", "Shino Aburame", "Insectes Destructeurs", "C", "Konoha", 2, 2, ""],
  ["ks-033", "033/130", "Shino Aburame", "Des Clones Faits d'Insectes", "UC", "Konoha", 3, 2, ""],
  ["ks-034", "034/130", "Kurenai Yuhi", "Sensei de l'Équipe 8", "C", "Konoha", 4, 3, ""],
  ["ks-035", "035/130", "Kurenai Yuhi", "Lien de l'Arbre Mort", "UC", "Konoha", 5, 3, ""],
  ["ks-036", "036/130", "Neji Hyûga", "Poing Souple", "C", "Konoha", 3, 2, ""],
  ["ks-037", "037/130", "Neji Hyûga", "Le Tourbillon Divin du Hakke", "UC", "Konoha", 4, 3, ""],
  ["ks-038", "038/130", "Rock Lee", "Entraînement au Poing violent", "C", "Konoha", 3, 2, ""],
  ["ks-039", "039/130", "Rock Lee", "La Fleur de Lotus, Recto", "UC", "Konoha", 4, 3, ""],
  ["ks-040", "040/130", "Tenten", "Genin de l'Équipe Gaï", "C", "Konoha", 2, 1, ""],
  ["ks-041", "041/130", "Tenten", "Spécialiste des Armes", "UC", "Konoha", 3, 2, ""],
  ["ks-042", "042/130", "Gaï Maito", "Sensei de l'Équipe Gaï", "C", "Konoha", 4, 3, ""],
  ["ks-043", "043/130", "Gaï Maito", "Poing Fort", "UC", "Konoha", 5, 4, ""],
  ["ks-044", "044/130", "Anko Mitarashi", "Surveillant des examens Chunin", "C", "Konoha", 3, 2, ""],
  ["ks-045", "045/130", "Anko Mitarashi", "La Poigne du Serpent Spectral", "UC", "Konoha", 4, 3, ""],
  ["ks-046", "046/130", "Ebisu", "Entraîneur d'Élite", "C", "Konoha", 2, 2, ""],
  ["ks-047", "047/130", "Iruka Umino", "Instructeur de l'Académie", "C", "Konoha", 2, 2, ""],
  ["ks-048", "048/130", "Hayate Gekko", "Shinobi talentueux", "C", "Konoha", 3, 2, ""],
  ["ks-049", "049/130", "Genma Shiranui", "Garde d'Élite", "C", "Konoha", 3, 2, ""],
  ["ks-050", "050/130", "Orochimaru", "Infiltré", "C", "Oto", 4, 3, ""],
  ["ks-051", "051/130", "Orochimaru", "Style d'Orochimaru : Permutation", "UC", "Oto", 5, 4, ""],
  ["ks-052", "052/130", "Kabuto Yakushi", "La Taupe", "C", "Oto", 2, 2, ""],
  ["ks-053", "053/130", "Kabuto Yakushi", "Destruction des blessures de guérison yin", "UC", "Oto", 3, 2, ""],
  ["ks-054", "054/130", "Kabuto Yakushi", "Technique du Temple Nirvana", "UC", "Oto", 4, 3, ""],
  ["ks-055", "055/130", "Kimimaro", "La Danse du Camélia", "C", "Oto", 3, 2, ""],
  ["ks-056", "056/130", "Kimimaro", "La Danse du Mélèze", "UC", "Oto", 4, 3, ""],
  ["ks-057", "057/130", "Jirôbô", "Porteur de la Marque Maudite", "C", "Oto", 3, 2, ""],
  ["ks-058", "058/130", "Jirôbô", "La Géôle de Terre", "UC", "Oto", 4, 3, ""],
  ["ks-059", "059/130", "Kidômaru", "Porteur de la Marque Maudite", "C", "Oto", 3, 2, ""],
  ["ks-060", "060/130", "Kidômaru", "Déploiement de la Toile", "UC", "Oto", 4, 3, ""],
  ["ks-061", "061/130", "Sakon", "Porteur de la Marque Maudite", "C", "Oto", 3, 2, ""],
  ["ks-062", "062/130", "Sakon", "Apposition des Sceaux Maléfiques", "UC", "Oto", 4, 3, ""],
  ["ks-063", "063/130", "Ukon", "Possession Moléculaire", "UC", "Oto", 4, 3, ""],
  ["ks-064", "064/130", "Tayuya", "Porteur de la Marque Maudite", "C", "Oto", 3, 2, ""],
  ["ks-065", "065/130", "Tayuya", "La Flûte Démoniaque", "UC", "Oto", 4, 3, ""],
  ["ks-066", "066/130", "Doki", "Invocation", "C", "Oto", 3, 2, ""],
  ["ks-067", "067/130", "Rempart", "Invocation", "UC", "Oto", 4, 3, ""],
  ["ks-068", "068/130", "Dosu Kinuta", "Ouïe Surhumaine", "C", "Oto", 2, 2, ""],
  ["ks-069", "069/130", "Dosu Kinuta", "Haut-parleur à écho résonant", "UC", "Oto", 3, 2, ""],
  ["ks-070", "070/130", "Zaku Abumi", "Shinobi trop confiant", "C", "Oto", 2, 1, ""],
  ["ks-071", "071/130", "Zaku Abumi", "Ondes Cinglantes", "UC", "Oto", 3, 2, ""],
  ["ks-072", "072/130", "Kin Tsuchi", "Kunoichi du Son", "C", "Oto", 2, 1, ""],
  ["ks-073", "073/130", "Kin Tsuchi", "Clone du Son de Cloche", "UC", "Oto", 3, 2, ""],
  ["ks-074", "074/130", "Gaara", "Genin du Village du Sable", "C", "Suna", 3, 2, ""],
  ["ks-075", "075/130", "Gaara", "Bouclier de Sable", "UC", "Suna", 4, 3, ""],
  ["ks-076", "076/130", "Ichibi", "Métamorphose", "UC", "Suna", 5, 4, ""],
  ["ks-077", "077/130", "Kankurô", "Fils de Chakra", "C", "Suna", 2, 2, ""],
  ["ks-078", "078/130", "Kankurô", "Technique de Marionnettiste", "UC", "Suna", 3, 2, ""],
  ["ks-079", "079/130", "Temari", "Kunoichi de Suna", "C", "Suna", 2, 2, ""],
  ["ks-080", "080/130", "Temari", "La Grande Lame du Vent", "UC", "Suna", 3, 2, ""],
  ["ks-081", "081/130", "Baki", "Agent du Conseil", "C", "Suna", 3, 2, ""],
  ["ks-082", "082/130", "Baki", "Épée de Vent", "UC", "Suna", 4, 3, ""],
  ["ks-083", "083/130", "Rasa", "Quatrième Kazekage", "UC", "Suna", 5, 4, ""],
  ["ks-084", "084/130", "Yashamaru", "Tuteur de Gaara", "C", "Suna", 2, 1, ""],
  ["ks-085", "085/130", "Yashamaru", "Mission Désespérée", "UC", "Suna", 3, 2, ""],
  ["ks-086", "086/130", "Zabuza Momochi", "Le Sabre du Bourreau", "C", "Indépendant", 4, 3, ""],
  ["ks-087", "087/130", "Zabuza Momochi", "Prison Aqueuse", "UC", "Indépendant", 5, 3, ""],
  ["ks-088", "088/130", "Haku", "Orphelin du Pays de l'Eau", "C", "Indépendant", 2, 2, ""],
  ["ks-089", "089/130", "Haku", "Les Démoniaques Miroirs de Glace", "UC", "Indépendant", 4, 3, ""],
  ["ks-090", "090/130", "Itachi Uchiwa", "Akatsuki", "C", "Akatsuki", 4, 3, ""],
  ["ks-091", "091/130", "Itachi Uchiwa", "Le Kaléidoscope Hypnotique du Sharingan", "UC", "Akatsuki", 6, 4, ""],
  ["ks-092", "092/130", "Kisame Hoshigaki", "Le Ninja Déserteur du Village du Brouillard", "C", "Akatsuki", 4, 3, ""],
  ["ks-093", "093/130", "Kisame Hoshigaki", "Samehada", "UC", "Akatsuki", 5, 4, ""],
  ["ks-094", "094/130", "Gamabunta", "Chef des Crapauds", "C", "Konoha", 5, 4, "Invocation"],
  ["ks-095", "095/130", "Gamahiro", "Crapaud Armé", "C", "Konoha", 4, 3, "Invocation"],
  ["ks-096", "096/130", "Gamakichi", "Fils aîné de Gamabunta", "C", "Konoha", 1, 1, "Invocation"],
  ["ks-097", "097/130", "Gamatatsu", "Fils cadet de Gamabunta", "C", "Konoha", 1, 1, "Invocation"],
  ["ks-098", "098/130", "Katsuyu", "Limace Géante", "C", "Konoha", 4, 3, "Invocation"],
  ["ks-099", "099/130", "Pakkun", "Chien Ninja de Kakashi", "C", "Konoha", 1, 1, "Invocation"],
  ["ks-100", "100/130", "Chiens Ninjas", "Chiens Ninjas de Kakashi", "C", "Konoha", 2, 2, "Invocation"],
  ["ks-101", "101/130", "Ton Ton", "Cochon Ninja de Tsunade", "C", "Konoha", 1, 1, "Invocation"],
  ["ks-102", "102/130", "Manda", "Invoqué par Orochimaru", "UC", "Oto", 5, 4, "Invocation"],
  ["ks-103", "103/130", "Kyodaigumo", "Pluie d'araignées", "UC", "Oto", 4, 3, "Invocation"],
  ["ks-104", "104/130", "Tsunade", "Le Trio Légendaire", "R", "Konoha", 6, 4, "Rare Art 104/130 A : Le Trio Légendaire"],
  ["ks-105", "105/130", "Jiraiya", "Technique d'Invocation", "R", "Konoha", 6, 4, "Rare Art 105/130 A : Technique d'Invocation"],
  ["ks-106", "106/130", "Kakashi Hatake", "Libération du Sceau Maléfique", "R", "Konoha", 6, 4, "Rare Art 106/130 A : Libération du Sceau Maléfique"],
  ["ks-107", "107/130", "Sasuke Uchiwa", "Les Mille Oiseaux", "R", "Konoha", 5, 3, "Rare Art 107/130 A : Les Mille Oiseaux"],
  ["ks-108", "108/130", "Naruto Uzumaki", "Rasengan", "R", "Konoha", 5, 3, "Rare Art 108/130 A : Rasengan"],
  ["ks-109", "109/130", "Sakura Haruno", "Ninja Médical", "R", "Konoha", 4, 2, "Rare Art 109/130 A : Ninja Médical"],
  ["ks-110", "110/130", "Ino Yamanaka", "La Grande Confusion", "R", "Konoha", 4, 2, "Rare Art 110/130 A : Transposition"],
  ["ks-111", "111/130", "Shikamaru Nara", "L'Étreinte Mortelle de l'Ombre", "R", "Konoha", 4, 3, "Rare Art 111/130 A : Maintenant ça m'ennuie vraiment..."],
  ["ks-112", "112/130", "Chôji Akimichi", "Pilule au Piment", "R", "Konoha", 5, 3, "Rare Art 112/130 A : Personne ne me traite de baudruche !"],
  ["ks-113", "113/130", "Kiba Inuzuka", "La Morsure de l'Homme-Bête", "R", "Konoha", 4, 3, "Rare Art 113/130 A : Allez mon vieux copain, on y va !"],
  ["ks-114", "114/130", "Hinata Hyûga", "Le Tourbillon Divin du Hakke", "R", "Konoha", 4, 2, "Rare Art 114/130 A : Je ne fuirai plus jamais !"],
  ["ks-115", "115/130", "Shino Aburame", "Technique du Mur d'Insectes", "R", "Konoha", 4, 3, "Rare Art 115/130 A : J'appartiens au clan Aburame"],
  ["ks-116", "116/130", "Neji Hyûga", "Les 64 Poings du Hakke", "R", "Konoha", 5, 3, "Rare Art 116/130 A : Les 64 Poings du Hakke"],
  ["ks-117", "117/130", "Rock Lee", "Suiken, la Technique de l'Homme Ivre", "R", "Konoha", 5, 3, "Rare Art 117/130 A : Gaï Sensei, regardez-moi !"],
  ["ks-118", "118/130", "Tenten", "Les Dragons Jumeaux", "R", "Konoha", 4, 2, "Rare Art 118/130 A : Les Dragons Jumeaux"],
  ["ks-119", "119/130", "Kankurô", "Le théâtre de marionnettes, la Chambre Noire", "R", "Suna", 4, 3, "Rare Art 119/130 A : Tu vas voir, le Théâtre de Marionnettes !"],
  ["ks-120", "120/130", "Gaara", "Le Sarcophage de Sable", "R", "Suna", 6, 4, "Rare Art 120/130 A : Le Sarcophage de Sable"],
  ["ks-121", "121/130", "Temari", "La Lame du Vent", "R", "Suna", 4, 3, "Rare Art 121/130 A : C'est fini."],
  ["ks-122", "122/130", "Jirôbô", "La Géôle de Terre", "R", "Oto", 4, 3, "Rare Art 122/130 A : La Paume Tournée vers les cieux !"],
  ["ks-123", "123/130", "Kimimaro", "Marque maudite de la Terre", "R", "Oto", 5, 4, "Rare Art 123/130 A : Je vais en finir avec toi."],
  ["ks-124", "124/130", "Kidômaru", "La Sécrétion Arachnéenne Dorée", "R", "Oto", 4, 3, "Rare Art 124/130 A : Ninpô, déploiement de la toile."],
  ["ks-125", "125/130", "Tayuya", "Démoniaque Flûte : Chaînes Fantômes", "R", "Oto", 4, 3, "Rare Art 125/130 A : Cette flûte est la seule arme que je possède."],
  ["ks-126", "126/130", "Orochimaru", "Ne te mets pas en travers de mon chemin.", "R", "Oto", 6, 5, "Rare Art 126/130 A : Ne te mets pas en travers de mon chemin."],
  ["ks-127", "127/130", "Sakon", "Le Poing de Pierre", "R", "Oto", 4, 3, "Rare Art 127/130 A : Vous allez me le payer !"],
  ["ks-128", "128/130", "Itachi Uchiwa", "Amaterasu.", "R", "Akatsuki", 7, 5, "Rare Art 128/130 A : Amaterasu."],
  ["ks-129", "129/130", "Kyûbi", "Tu devrais être reconnaissant envers moi…", "R", "Konoha", 8, 6, "Rare Art 129/130 A : Tu devrais être reconnaissant envers moi…"],
  ["ks-130", "130/130", "Ichibi", "Voici ma première victime !", "R", "Suna", 7, 5, "Rare Art 130/130 A : Voici ma première victime !"],
  ["ks-131", "131/130", "Tsunade", "Cinquième Hokage", "S", "Konoha", 7, 5, "Secrète (1/10 boosters)"],
  ["ks-132", "132/130", "Jiraiya", "Dans l'Estomac du Crapaud", "S", "Konoha", 7, 5, "Secrète (1/10 boosters)"],
  ["ks-133", "133/130", "Naruto Uzumaki", "Rasengan", "S", "Konoha", 7, 4, "Secrète (1/10 boosters)"],
  ["ks-134", "134/130", "Kyûbi", "Destruction", "S", "Konoha", 8, 6, "Secrète (1/10 boosters)"],
  ["ks-135", "135/130", "Sakura Haruno", "Corps Médical du Village de la Feuille", "S", "Konoha", 5, 3, "Secrète (1/10 boosters)"],
  ["ks-136", "136/130", "Sasuke Uchiwa", "Marque Maudite du Ciel", "S", "Konoha", 7, 4, "Secrète (1/10 boosters)"],
  ["ks-137", "137/130", "Kakashi Hatake", "L'Éclair Pourfendeur", "S", "Konoha", 7, 5, "Secrète (1/10 boosters)"],
  ["ks-138", "138/130", "Orochimaru", "Invocation, La Réincarnation des Âmes", "S", "Oto", 7, 5, "Secrète (1/10 boosters)"],
  ["ks-139", "139/130", "Gaara", "Tombeau du Désert", "S", "Suna", 7, 5, "Secrète (1/10 boosters)"],
  ["ks-140", "140/130", "Itachi Uchiwa", "Les Arcanes Lunaires (Tsukuyomi)", "S", "Akatsuki", 8, 5, "Secrète (1/10 boosters)"],
  ["ks-131g", "131/130 V", "Tsunade", "Cinquième Hokage (Gold /50)", "SGV", "Konoha", 7, 5, "Secret Gold V Numérotée (50 ex. monde)"],
  ["ks-133g", "133/130 V", "Naruto Uzumaki", "Rasengan (Gold /50)", "SGV", "Konoha", 7, 4, "Secret Gold V Numérotée (50 ex. monde)"],
  ["ks-136g", "136/130 V", "Sasuke Uchiwa", "Tu m'énerves. (Gold /50)", "SGV", "Konoha", 7, 4, "Secret Gold V Numérotée (50 ex. monde)"],
  ["ks-137g", "137/130 V", "Kakashi Hatake", "L'Éclair Pourfendeur (Gold /50)", "SGV", "Konoha", 7, 5, "Secret Gold V Numérotée (50 ex. monde)"],
  ["ks-128v", "128/130 V", "Itachi Uchiwa", "Amaterasu.", "MV", "Akatsuki", 7, 5, "Mythos V (Ultra-Rare)"],
  ["ks-133v", "133/130 V", "Naruto Uzumaki", "Je vais me prendre un bol de nouilles chez Ichiraku !", "MV", "Konoha", 7, 4, "Mythos V (Ultra-Rare)"],
  ["ks-135v", "135/130 V", "Sakura Haruno", "Sasuke est en train de me regarder.", "MV", "Konoha", 5, 3, "Mythos V (Ultra-Rare)"],
  ["ks-136v", "136/130 V", "Sasuke Uchiwa", "Tu m'énerves.", "MV", "Konoha", 7, 4, "Mythos V (Ultra-Rare)"],
  ["ks-141", "141/130", "Naruto Uzumaki", "Défiant Sasuke", "M", "Konoha", 5, 3, "Promo Starter Pack Équipe 7 (1re Éd)"],
  ["ks-142", "142/130", "Sasuke Uchiwa", "Défiant Naruto", "M", "Konoha", 5, 3, "Promo Starter Pack Équipe 7 (1re Éd)"],
  ["ks-143", "143/130", "Itachi Uchiwa", "Traquant Naruto", "M", "Akatsuki", 6, 4, "Promo Starter Pack Akatsuki (2e Éd)"],
  ["ks-144", "144/130", "Kisame Hoshigaki", "Absorption du Chakra", "M", "Akatsuki", 6, 4, "Promo Starter Pack Akatsuki (2e Éd)"],
  ["ks-145", "145/130", "Naruto Uzumaki", "Équipe 7 originelle", "M", "Konoha", 4, 2, "Promo Coffret / Événement Mythos"],
  ["ks-146", "146/130", "Sasuke Uchiwa", "Équipe 7 originelle", "M", "Konoha", 4, 2, "Promo Coffret / Événement Mythos"],
  ["ks-147", "147/130", "Sakura Haruno", "Équipe 7 originelle", "M", "Konoha", 3, 2, "Promo Coffret / Événement Mythos"],
  ["ks-148", "148/130", "Kakashi Hatake", "Équipe 7 originelle", "M", "Konoha", 5, 3, "Promo Coffret / Événement Mythos"],
  ["ks-m01", "M1/10", "Mission 1", "Appel de Soutien", "MS", "Konoha", 0, 0, "Carte Mission Panoramique"],
  ["ks-m02", "M2/10", "Mission 2", "Examen Chûnin", "MS", "Konoha", 0, 0, "Carte Mission Panoramique"],
  ["ks-m03", "M3/10", "Mission 3", "Trouver le Traître", "MS", "Oto", 0, 0, "Carte Mission Panoramique"],
  ["ks-m04", "M4/10", "Mission 4", "Assassinat", "MS", "Suna", 0, 0, "Carte Mission Panoramique"],
  ["ks-m05", "M5/10", "Mission 5", "Ramener", "MS", "Konoha", 0, 0, "Carte Mission Panoramique"],
  ["ks-m06", "M6/10", "Mission 6", "Sauvetage d'un Ami", "MS", "Konoha", 0, 0, "Carte Mission Panoramique"],
  ["ks-m07", "M7/10", "Mission 7", "Je dois partir", "MS", "Oto", 0, 0, "Carte Mission Panoramique"],
  ["ks-m08", "M8/10", "Mission 8", "Tendre un Piège", "MS", "Konoha", 0, 0, "Carte Mission Panoramique"],
  ["ks-m09", "M9/10", "Mission 9", "Protéger le Chef", "MS", "Konoha", 0, 0, "Carte Mission Panoramique"],
  ["ks-m10", "M10/10", "Mission 10", "Entraînement au Chakra", "MS", "Konoha", 0, 0, "Carte Mission Panoramique"]
];

// ============================================================================
// SET 2 : SHINOBI SHIREN (172 RÉFÉRENCES COMPLÈTES)
// ============================================================================
const RAW_SET2_DATA = [
  ["ss-000", "000/140", "Naruto & Sasuke", "Vallée de la Fin (Or 22K)", "L", "Konoha", 9, 6, "Legendary Or 22K Numérotée"],
  ["ss-001", "001/140", "Minato Namikaze", "L'Éclair Jaune de Konoha", "C", "Konoha", 5, 4, ""],
  ["ss-002", "002/140", "Minato Namikaze", "Quatrième Hokage", "UC", "Konoha", 6, 4, ""],
  ["ss-003", "003/140", "Hashirama Senju", "Premier Hokage", "C", "Konoha", 5, 4, ""],
  ["ss-004", "004/140", "Hashirama Senju", "Mokuton, La Naissance de la Forêt", "UC", "Konoha", 6, 4, ""],
  ["ss-005", "005/140", "Tobirama Senju", "Deuxième Hokage", "C", "Konoha", 5, 4, ""],
  ["ss-006", "006/140", "Tobirama Senju", "Suiton, Le Dragon Aqueux", "UC", "Konoha", 6, 4, ""],
  ["ss-007", "007/140", "Hiruzen Sarutobi", "Volonté du Feu", "C", "Konoha", 4, 3, ""],
  ["ss-008", "008/140", "Hiruzen Sarutobi", "L'Emprisonnement des Morts", "UC", "Konoha", 6, 4, ""],
  ["ss-009", "009/140", "Tsunade", "Force Herculéenne", "C", "Konoha", 4, 3, ""],
  ["ss-010", "010/140", "Tsunade", "Coup de Talon Dévastateur", "UC", "Konoha", 5, 4, ""],
  ["ss-011", "011/140", "Jiraiya", "Le Sannin Légendaire", "C", "Konoha", 4, 3, ""],
  ["ss-012", "012/140", "Jiraiya", "Katon, L'Huile du Crapaud", "UC", "Konoha", 5, 4, ""],
  ["ss-013", "013/140", "Shizune", "Brouillard Empoisonné", "C", "Konoha", 2, 2, ""],
  ["ss-014", "014/140", "Naruto Uzumaki", "Détermination Inébranlable", "C", "Konoha", 2, 1, ""],
  ["ss-015", "015/140", "Naruto Uzumaki", "Multi-Clonage Supra", "UC", "Konoha", 4, 2, ""],
  ["ss-016", "016/140", "Naruto Uzumaki", "Manteau du Démon Renard", "UC", "Konoha", 5, 3, ""],
  ["ss-017", "017/140", "Sasuke Uchiwa", "Ambition de Vengeance", "C", "Konoha", 3, 2, ""],
  ["ss-018", "018/140", "Sasuke Uchiwa", "Katon, La Balle de Feu Suprême", "UC", "Konoha", 4, 2, ""],
  ["ss-019", "019/140", "Sasuke Uchiwa", "Éveil du Sceau Maudit", "UC", "Konoha", 5, 3, ""],
  ["ss-020", "020/140", "Sakura Haruno", "Esprit d'Équipe", "C", "Konoha", 2, 1, ""],
  ["ss-021", "021/140", "Sakura Haruno", "Premiers Soins", "UC", "Konoha", 3, 2, ""],
  ["ss-022", "022/140", "Kakashi Hatake", "Le Ninja Copieur", "C", "Konoha", 4, 3, ""],
  ["ss-023", "023/140", "Kakashi Hatake", "Mille Ans de Souffrance", "UC", "Konoha", 4, 2, ""],
  ["ss-024", "024/140", "Kakashi Hatake", "Traque Canine", "UC", "Konoha", 5, 3, ""],
  ["ss-025", "025/140", "Shikamaru Nara", "Chûnin Stratège", "C", "Konoha", 3, 2, ""],
  ["ss-026", "026/140", "Shikamaru Nara", "Coup d'État à 200 de QI", "UC", "Konoha", 4, 3, ""],
  ["ss-027", "027/140", "Chôji Akimichi", "Pilule aux Épinards", "C", "Konoha", 3, 2, ""],
  ["ss-028", "028/140", "Chôji Akimichi", "Pilule au Curry", "UC", "Konoha", 4, 3, ""],
  ["ss-029", "029/140", "Ino Yamanaka", "Transfert d'Esprit", "C", "Konoha", 2, 1, ""],
  ["ss-030", "030/140", "Ino Yamanaka", "Piège Mental", "UC", "Konoha", 3, 2, ""],
  ["ss-031", "031/140", "Asuma Sarutobi", "Nuée Ardente", "C", "Konoha", 4, 3, ""],
  ["ss-032", "032/140", "Asuma Sarutobi", "Combat Rapproché", "UC", "Konoha", 5, 3, ""],
  ["ss-033", "033/140", "Neji Hyûga", "Prodige de la Branche Secondaire", "C", "Konoha", 3, 2, ""],
  ["ss-034", "034/140", "Neji Hyûga", "Angle Mort du Byakugan", "UC", "Konoha", 4, 3, ""],
  ["ss-035", "035/140", "Rock Lee", "Les Poids d'Entraînement", "C", "Konoha", 3, 2, ""],
  ["ss-036", "036/140", "Rock Lee", "Ouverture des Cinq Portes", "UC", "Konoha", 5, 3, ""],
  ["ss-037", "037/140", "Tenten", "Pluie d'Armes Ninjas", "C", "Konoha", 2, 2, ""],
  ["ss-038", "038/140", "Tenten", "Parchemin d'Invocation Géant", "UC", "Konoha", 3, 2, ""],
  ["ss-039", "039/140", "Gaï Maito", "La Fougue de la Jeunesse", "C", "Konoha", 4, 3, ""],
  ["ss-040", "040/140", "Gaï Maito", "Le Paon Matinal", "UC", "Konoha", 6, 4, ""],
  ["ss-041", "041/140", "Kiba Inuzuka", "Flair Aiguisé", "C", "Konoha", 2, 1, ""],
  ["ss-042", "042/140", "Kiba & Akamaru", "Morsure du Loup Bicéphale", "UC", "Konoha", 4, 3, ""],
  ["ss-043", "043/140", "Hinata Hyûga", "Regard Déterminé", "C", "Konoha", 2, 1, ""],
  ["ss-044", "044/140", "Hinata Hyûga", "Les 64 Poings Protecteurs", "UC", "Konoha", 4, 2, ""],
  ["ss-045", "045/140", "Shino Aburame", "Nuée de Kikaichû", "C", "Konoha", 3, 2, ""],
  ["ss-046", "046/140", "Shino Aburame", "Sphère d'Insectes", "UC", "Konoha", 4, 3, ""],
  ["ss-047", "047/140", "Kurenai Yuhi", "Illusion Florale", "C", "Konoha", 3, 2, ""],
  ["ss-048", "048/140", "Hiashi Hyûga", "Chef du Clan Hyûga", "UC", "Konoha", 5, 3, ""],
  ["ss-049", "049/140", "Shikaku Nara", "Coordinateur Tactique", "UC", "Konoha", 4, 3, ""],
  ["ss-050", "050/140", "Inoichi Yamanaka", "Sonde Mentale", "UC", "Konoha", 4, 3, ""],
  ["ss-051", "051/140", "Chôza Akimichi", "Décuplement Partiel", "UC", "Konoha", 4, 3, ""],
  ["ss-052", "052/140", "Tsume Inuzuka", "Crocs Lacérants", "C", "Konoha", 3, 2, ""],
  ["ss-053", "053/140", "Shibi Aburame", "Maître des Essaims", "C", "Konoha", 3, 2, ""],
  ["ss-054", "054/140", "Izumo Kamizuki", "Garde de la Porte", "C", "Konoha", 2, 2, ""],
  ["ss-055", "055/140", "Kotetsu Hagane", "Masse d'Arme", "C", "Konoha", 2, 2, ""],
  ["ss-056", "056/140", "Raidô Namiashi", "Lame Noire Kokutô", "C", "Konoha", 3, 2, ""],
  ["ss-057", "057/140", "Aoba Yamashiro", "Dispersion des Corbeaux", "C", "Konoha", 3, 2, ""],
  ["ss-058", "058/140", "Ibiki Morino", "Chef de la Section d'Interrogatoire", "UC", "Konoha", 4, 3, ""],
  ["ss-059", "059/140", "Konohamaru Sarutobi", "Petit-fils du Hokage", "C", "Konoha", 1, 1, ""],
  ["ss-060", "060/140", "Gaara", "Bouclier Automatique", "C", "Suna", 3, 2, ""],
  ["ss-061", "061/140", "Gaara", "Bruine de Sable", "UC", "Suna", 4, 3, ""],
  ["ss-062", "062/140", "Gaara", "Funérailles Impériales du Désert", "UC", "Suna", 5, 4, ""],
  ["ss-063", "063/140", "Temari", "Première Lune", "C", "Suna", 2, 2, ""],
  ["ss-064", "064/140", "Temari", "Danse du Faucheur", "UC", "Suna", 4, 3, ""],
  ["ss-065", "065/140", "Kankurô", "Karasu (Le Corbeau)", "C", "Suna", 2, 2, ""],
  ["ss-066", "066/140", "Kankurô", "Kuroari (La Fourmi Noire)", "UC", "Suna", 4, 3, ""],
  ["ss-067", "067/140", "Kankurô", "Sanshôuo (La Salamandre)", "UC", "Suna", 4, 3, ""],
  ["ss-068", "068/140", "Baki", "Commandant de l'Invasion", "C", "Suna", 3, 2, ""],
  ["ss-069", "069/140", "Orochimaru", "Épée de Kusanagi", "C", "Oto", 4, 3, ""],
  ["ss-070", "070/140", "Orochimaru", "Malédiction des Serpents", "UC", "Oto", 5, 4, ""],
  ["ss-071", "071/140", "Kabuto Yakushi", "Scalpel de Chakra", "C", "Oto", 3, 2, ""],
  ["ss-072", "072/140", "Kabuto Yakushi", "Régénération Cellulaire", "UC", "Oto", 4, 3, ""],
  ["ss-073", "073/140", "Kimimaro", "Kekkai Genkai Shikotsumyaku", "C", "Oto", 3, 2, ""],
  ["ss-074", "074/140", "Kimimaro", "La Danse de la Clématite", "UC", "Oto", 5, 3, ""],
  ["ss-075", "075/140", "Jirôbô", "Marque Maudite Niveau 2", "UC", "Oto", 4, 3, ""],
  ["ss-076", "076/140", "Kidômaru", "Arc de Guerre Arachnéen", "UC", "Oto", 4, 3, ""],
  ["ss-077", "077/140", "Sakon & Ukon", "Double Démon", "UC", "Oto", 4, 3, ""],
  ["ss-078", "078/140", "Tayuya", "Mélodie de la Révolte", "UC", "Oto", 4, 3, ""],
  ["ss-079", "079/140", "Yoroi Akadô", "Absorption de Chakra", "C", "Oto", 2, 2, ""],
  ["ss-080", "080/140", "Misumi Tsurugi", "Dislocation Corporelle", "C", "Oto", 2, 2, ""],
  ["ss-081", "081/140", "Zabuza Momochi", "Camouflage dans la Brume", "C", "Indépendant", 3, 2, ""],
  ["ss-082", "082/140", "Zabuza Momochi", "Démon du Brouillard", "UC", "Indépendant", 5, 3, ""],
  ["ss-083", "083/140", "Haku", "Mille Aiguilles Aqueuses", "C", "Indépendant", 3, 2, ""],
  ["ss-084", "084/140", "Haku", "Sacrifice Silencieux", "UC", "Indépendant", 4, 3, ""],
  ["ss-085", "085/140", "Itachi Uchiwa", "Illusion Écarlate", "C", "Akatsuki", 4, 3, ""],
  ["ss-086", "086/140", "Itachi Uchiwa", "Clone Explosif", "UC", "Akatsuki", 5, 4, ""],
  ["ss-087", "087/140", "Kisame Hoshigaki", "Requin Élémentaire Aqueux", "C", "Akatsuki", 4, 3, ""],
  ["ss-088", "088/140", "Kisame Hoshigaki", "Marée Déferlante", "UC", "Akatsuki", 5, 4, ""],
  ["ss-089", "089/140", "Enma", "Le Roi des Singes", "UC", "Konoha", 5, 4, "Invocation"],
  ["ss-090", "090/140", "Enma", "Bâton de la Vérité Bouddhique", "UC", "Konoha", 5, 4, "Invocation"],
  ["ss-091", "091/140", "Kamatari", "Belette à la Faux", "C", "Suna", 3, 2, "Invocation"],
  ["ss-092", "092/140", "Ningame", "Tortue Ninja de Gaï", "C", "Konoha", 2, 1, "Invocation"],
  ["ss-093", "093/140", "Gamaken", "Crapaud Bouclier", "C", "Konoha", 4, 3, "Invocation"],
  ["ss-094", "094/140", "Rashômon", "Le Rempart Ultime", "UC", "Oto", 4, 3, "Invocation"],
  ["ss-095", "095/140", "Obito Uchiwa", "Jeune Genin de Konoha", "C", "Konoha", 2, 1, "Kakashi Gaiden"],
  ["ss-096", "096/140", "Rin Nohara", "Ninja Médical de l'Équipe Minato", "C", "Konoha", 2, 1, "Kakashi Gaiden"],
  ["ss-097", "097/140", "Kakashi Hatake (Jeune)", "Promesse de Jônin", "UC", "Konoha", 4, 2, "Kakashi Gaiden"],
  ["ss-098", "098/140", "Dan Katô", "Technique Fantôme", "C", "Konoha", 3, 2, ""],
  ["ss-099", "099/140", "Nawaki", "Rêve de Hokage", "C", "Konoha", 1, 1, ""],
  ["ss-100", "100/140", "Fugaku Uchiwa", "Chef du Clan Uchiwa", "UC", "Konoha", 4, 3, ""],
  ["ss-101", "101/140", "Mikoto Uchiwa", "Mère Bienveillante", "C", "Konoha", 2, 1, ""],
  ["ss-102", "102/140", "Shigure", "Pluie d'Aiguilles", "C", "Indépendant", 2, 2, ""],
  ["ss-103", "103/140", "Oboro", "Clone Brumeux", "C", "Indépendant", 2, 1, ""],
  ["ss-104", "104/140", "Genyûmaru", "Réceptacle d'Orochimaru", "C", "Oto", 2, 1, ""],
  ["ss-105", "105/140", "Jiraiya", "Mode Ermite Impérial", "R", "Konoha", 6, 4, "Rare Art 105/140 A incluse"],
  ["ss-106", "106/140", "Tsunade", "Sceau de la Création et du Renouveau", "R", "Konoha", 6, 4, "Rare Art 106/140 A incluse"],
  ["ss-107", "107/140", "Orochimaru", "Serpent Blanc de la Réincarnation", "R", "Oto", 6, 4, "Rare Art 107/140 A incluse"],
  ["ss-108", "108/140", "Hiruzen Sarutobi", "Le Dieu des Shinobi", "R", "Konoha", 6, 4, "Rare Art 108/140 A incluse"],
  ["ss-109", "109/140", "Hashirama Senju", "Fondateur de Konoha", "R", "Konoha", 7, 5, "Rare Art 109/140 A incluse"],
  ["ss-110", "110/140", "Tobirama Senju", "Maître de l'Eau", "R", "Konoha", 6, 4, "Rare Art 110/140 A incluse"],
  ["ss-111", "111/140", "Minato Namikaze", "Dieu du Tonnerre Volant", "R", "Konoha", 7, 5, "Rare Art 111/140 A incluse"],
  ["ss-112", "112/140", "Naruto Uzumaki", "Orbe Tourbillonnant Vermillon", "R", "Konoha", 6, 4, "Rare Art 112/140 A incluse"],
  ["ss-113", "113/140", "Sasuke Uchiwa", "Les Mille Oiseaux Noirs", "R", "Konoha", 6, 4, "Rare Art 113/140 A incluse"],
  ["ss-114", "114/140", "Sakura Haruno", "Héritière du Sannin", "R", "Konoha", 4, 2, "Rare Art 114/140 A incluse"],
  ["ss-115", "115/140", "Kakashi Hatake", "Éclair Pourfendeur", "R", "Konoha", 6, 4, "Rare Art 115/140 A incluse"],
  ["ss-116", "116/140", "Shikamaru Nara", "Chef d'Escouade Chûnin", "R", "Konoha", 5, 3, "Rare Art 116/140 A incluse"],
  ["ss-117", "117/140", "Chôji Akimichi", "Ailes de Papillon de Chakra", "R", "Konoha", 5, 3, "Rare Art 117/140 A incluse"],
  ["ss-118", "118/140", "Neji Hyûga", "Les 128 Poings du Hakke", "R", "Konoha", 5, 3, "Rare Art 118/140 A incluse"],
  ["ss-119", "119/140", "Rock Lee", "Fleur de Lotus Verso", "R", "Konoha", 6, 4, "Rare Art 119/140 A incluse"],
  ["ss-120", "120/140", "Kiba Inuzuka", "Garôga, Les Crocs Lacérants", "R", "Konoha", 5, 3, "Rare Art 120/140 A incluse"],
  ["ss-121", "121/140", "Gaï Maito", "Ouverture de la Sixième Porte", "R", "Konoha", 6, 4, "Rare Art 121/140 A incluse"],
  ["ss-122", "122/140", "Asuma Sarutobi", "Fierté des Douze Gardiens", "R", "Konoha", 5, 3, "Rare Art 122/140 A incluse"],
  ["ss-123", "123/140", "Gaara", "Raz-de-Marée de Sable", "R", "Suna", 6, 4, "Rare Art 123/140 A incluse"],
  ["ss-124", "124/140", "Temari", "Danse de la Faucheuse", "R", "Suna", 5, 3, "Rare Art 124/140 A incluse"],
  ["ss-125", "125/140", "Kankurô", "Marionnettiste de Génie", "R", "Suna", 5, 3, "Rare Art 125/140 A incluse"],
  ["ss-126", "126/140", "Kimimaro", "La Danse des Fougères Arborescentes", "R", "Oto", 6, 4, "Rare Art 126/140 A incluse"],
  ["ss-127", "127/140", "Sakon & Ukon", "Rempart de Rashômon", "R", "Oto", 5, 3, "Rare Art 127/140 A incluse"],
  ["ss-128", "128/140", "Tayuya", "Illusion Démoniaque", "R", "Oto", 5, 3, "Rare Art 128/140 A incluse"],
  ["ss-129", "129/140", "Kidômaru", "Flèche d'Or Mortelle", "R", "Oto", 5, 3, "Rare Art 129/140 A incluse"],
  ["ss-130", "130/140", "Jirôbô", "Puissance Colossale", "R", "Oto", 5, 3, "Rare Art 130/140 A incluse"],
  ["ss-131", "131/140", "Kabuto Yakushi", "Bras Droit d'Orochimaru", "R", "Oto", 5, 3, "Rare Art 131/140 A incluse"],
  ["ss-132", "132/140", "Zabuza Momochi", "Exécution Silencieuse", "R", "Indépendant", 5, 4, "Rare Art 132/140 A incluse"],
  ["ss-133", "133/140", "Haku", "Vitesse de la Lumière", "R", "Indépendant", 5, 3, "Rare Art 133/140 A incluse"],
  ["ss-134", "134/140", "Itachi Uchiwa", "Prodige de l'ANBU", "R", "Akatsuki", 6, 4, "Rare Art 134/140 A incluse"],
  ["ss-135", "135/140", "Kisame Hoshigaki", "Prison Requin Aqueuse", "R", "Akatsuki", 6, 4, "Rare Art 135/140 A incluse"],
  ["ss-136", "136/140", "Shukaku (Ichibi)", "Esprit du Sable Déchaîné", "R", "Suna", 7, 5, "Rare Art 136/140 A incluse"],
  ["ss-137", "137/140", "Gamabunta", "Sabre de Dosu", "R", "Konoha", 6, 4, "Rare Art 137/140 A incluse"],
  ["ss-138", "138/140", "Manda", "Roi des Serpents", "R", "Oto", 6, 4, "Rare Art 138/140 A incluse"],
  ["ss-139", "139/140", "Katsuyu", "Division Acide", "R", "Konoha", 5, 4, "Rare Art 139/140 A incluse"],
  ["ss-140", "140/140", "Enma", "Partenaire du Troisième", "R", "Konoha", 6, 4, "Rare Art 140/140 A incluse"],
  ["ss-141", "141/140", "Naruto Uzumaki", "Chakra de Kyûbi (1 Queue)", "S", "Konoha", 8, 5, "Secrète Set 2"],
  ["ss-142", "142/140", "Sasuke Uchiwa", "Marque Maudite Niveau 2", "S", "Konoha", 8, 5, "Secrète Set 2"],
  ["ss-143", "143/140", "Minato Namikaze", "Scellement du Démon Renard", "S", "Konoha", 8, 5, "Secrète Set 2"],
  ["ss-144", "144/140", "Hashirama Senju", "Dieu des Shinobi", "S", "Konoha", 8, 6, "Secrète Set 2"],
  ["ss-145", "145/140", "Tobirama Senju", "Créateur des Jutsu Interdits", "S", "Konoha", 7, 5, "Secrète Set 2"],
  ["ss-146", "146/140", "Hiruzen Sarutobi", "Le Sacrifice du Hokage", "S", "Konoha", 7, 5, "Secrète Set 2"],
  ["ss-147", "147/140", "Kimimaro", "Dernière Danse", "S", "Oto", 7, 5, "Secrète Set 2"],
  ["ss-148", "148/140", "Gaara", "Défense Absolue Impénétrable", "S", "Suna", 7, 5, "Secrète Set 2"],
  ["ss-149", "149/140", "Rock Lee", "L'Ouverture des Portes Célestes", "S", "Konoha", 7, 5, "Secrète Set 2"],
  ["ss-150", "150/140", "Neji Hyûga", "Le Destin Brisé", "S", "Konoha", 7, 4, "Secrète Set 2"],
  ["ss-141g", "141/140 V", "Naruto Uzumaki", "Chakra de Kyûbi (Gold /50)", "SGV", "Konoha", 8, 5, "Secret Gold V Numérotée (50 ex.)"],
  ["ss-142g", "142/140 V", "Sasuke Uchiwa", "Marque Maudite Niv.2 (Gold /50)", "SGV", "Konoha", 8, 5, "Secret Gold V Numérotée (50 ex.)"],
  ["ss-143g", "143/140 V", "Minato Namikaze", "L'Éclair Jaune (Gold /50)", "SGV", "Konoha", 8, 5, "Secret Gold V Numérotée (50 ex.)"],
  ["ss-147g", "147/140 V", "Kimimaro", "Dernière Danse (Gold /50)", "SGV", "Oto", 7, 5, "Secret Gold V Numérotée (50 ex.)"],
  ["ss-141v", "141/140 V", "Naruto Uzumaki", "Je ne reviens jamais sur ma parole !", "MV", "Konoha", 8, 5, "Mythos V"],
  ["ss-142v", "142/140 V", "Sasuke Uchiwa", "Briser les Liens", "MV", "Konoha", 8, 5, "Mythos V"],
  ["ss-143v", "143/140 V", "Minato Namikaze", "L'Héritage de Konoha", "MV", "Konoha", 8, 5, "Mythos V"],
  ["ss-149v", "149/140 V", "Rock Lee", "Le Génie de l'Effort", "MV", "Konoha", 7, 5, "Mythos V"],
  ["ss-151", "151/140", "Naruto Uzumaki", "Promo Starter Set 2", "M", "Konoha", 5, 3, "Promo Starter Pack Shinobi Shiren"],
  ["ss-152", "152/140", "Gaara", "Promo Starter Set 2", "M", "Suna", 5, 3, "Promo Starter Pack Shinobi Shiren"],
  ["ss-153", "153/140", "Minato Namikaze", "Promo Coffret Shinobi Shiren", "M", "Konoha", 6, 4, "Promo Coffret Mythos"],
  ["ss-154", "154/140", "Kimimaro", "Promo Coffret Shinobi Shiren", "M", "Oto", 5, 3, "Promo Coffret Mythos"],
  ["ss-m11", "M11/20", "Mission 11", "L'Épreuve de la Forêt de la Mort", "MS", "Konoha", 0, 0, "Carte Mission Panoramique Set 2"],
  ["ss-m12", "M12/20", "Mission 12", "Les Préliminaires de l'Examen", "MS", "Konoha", 0, 0, "Carte Mission Panoramique Set 2"],
  ["ss-m13", "M13/20", "Mission 13", "L'Entraînement sur l'Eau", "MS", "Konoha", 0, 0, "Carte Mission Panoramique Set 2"],
  ["ss-m14", "M14/20", "Mission 14", "Le Tournoi Final", "MS", "Konoha", 0, 0, "Carte Mission Panoramique Set 2"],
  ["ss-m15", "M15/20", "Mission 15", "L'Offensive de Suna et d'Oto", "MS", "Oto", 0, 0, "Carte Mission Panoramique Set 2"],
  ["ss-m16", "M16/20", "Mission 16", "Le Combat des Hokage", "MS", "Konoha", 0, 0, "Carte Mission Panoramique Set 2"],
  ["ss-m17", "M17/20", "Mission 17", "La Recherche de Tsunade", "MS", "Konoha", 0, 0, "Carte Mission Panoramique Set 2"],
  ["ss-m18", "M18/20", "Mission 18", "Le Choc des Trois Sannin", "MS", "Konoha", 0, 0, "Carte Mission Panoramique Set 2"],
  ["ss-m19", "M19/20", "Mission 19", "L'Escouade de Récupération de Sasuke", "MS", "Konoha", 0, 0, "Carte Mission Panoramique Set 2"],
  ["ss-m20", "M20/20", "Mission 20", "Duel à la Vallée de la Fin", "MS", "Konoha", 0, 0, "Carte Mission Panoramique Set 2"]
];

// Aperçu Set 3 : Akatsuki
const RAW_SET3_DATA = [
  ["ak-000", "000/150", "Pain & Itachi", "Aube Rouge (Or 22K)", "L", "Akatsuki", 9, 6, "Legendary Or 22K Numérotée"],
  ["ak-001", "001/150", "Pain (Tendô)", "Répulsion Céleste (Shinra Tensei)", "S", "Akatsuki", 9, 6, "Set 3 : Akatsuki"],
  ["ak-002", "002/150", "Konan", "Danse du Shikigami", "R", "Akatsuki", 6, 4, "Set 3 : Akatsuki"],
  ["ak-003", "003/150", "Deidara", "L'Art est une Explosion (C3)", "S", "Akatsuki", 8, 5, "Set 3 : Akatsuki"],
  ["ak-004", "004/150", "Sasori", "Marionnettiste des Sables Rouges", "R", "Akatsuki", 7, 5, "Set 3 : Akatsuki"],
  ["ak-005", "005/150", "Hidan", "Rituel de Jashin", "R", "Akatsuki", 6, 4, "Set 3 : Akatsuki"],
  ["ak-006", "006/150", "Kakuzu", "Rancune Terrestre", "R", "Akatsuki", 7, 5, "Set 3 : Akatsuki"]
];

const INITIAL_CARDS = [
  ...RAW_SET1_DATA.map(([id, number, name, subtitle, rarity, village, power, chakra, notes]) => ({
    id, setId: "set1", number, name, subtitle, rarity, village, power, chakra, notes
  })),
  ...RAW_SET2_DATA.map(([id, number, name, subtitle, rarity, village, power, chakra, notes]) => ({
    id, setId: "set2", number, name, subtitle, rarity, village, power, chakra, notes
  })),
  ...RAW_SET3_DATA.map(([id, number, name, subtitle, rarity, village, power, chakra, notes]) => ({
    id, setId: "set3", number, name, subtitle, rarity, village, power, chakra, notes
  }))
];

const RARITY_CONFIG = {
  C:   { label: "Commune", color: "bg-slate-600 text-slate-100 border-slate-500", slots: ["Standard", "Full Art", "Holo"] },
  UC:  { label: "Peu Commune", color: "bg-emerald-700 text-emerald-100 border-emerald-500", slots: ["Standard", "Full Art", "Holo"] },
  R:   { label: "Rare", color: "bg-blue-700 text-blue-100 border-blue-400", slots: ["Rare", "Holo", "Rare Art (A)"] },
  S:   { label: "Secrète", color: "bg-purple-700 text-purple-100 border-purple-400", slots: ["1re Éd.", "2e Éd.", "Gradée"] },
  MV:  { label: "Mythos V", color: "bg-rose-700 text-rose-100 border-rose-400", slots: ["1re Éd.", "2e Éd.", "Gradée"] },
  SGV: { label: "Secret Gold /50", color: "bg-amber-500 text-slate-950 font-black border-yellow-300", slots: ["Numérotée /50", "Gradée", "Autre"] },
  L:   { label: "Légendaire 22K", color: "bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 text-slate-950 font-black border-yellow-200", slots: ["1re Éd", "2e Éd", "Gradée"] },
  M:   { label: "Promo Mythos", color: "bg-cyan-700 text-cyan-100 border-cyan-400", slots: ["Standard", "Holo", "Scellée"] },
  MS:  { label: "Mission", color: "bg-indigo-700 text-indigo-100 border-indigo-400", slots: ["Standard", "Full Art", "Holo"] }
};

export default function MythosDexApp() {
  const [customEdits, setCustomEdits] = useState(() => {
    try {
      const saved = localStorage.getItem("mythosdex_v2_custom_edits");
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [collection, setCollection] = useState(() => {
    try {
      const saved = localStorage.getItem("mythosdex_v2_collection");
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [selectedSet, setSelectedSet] = useState("set2");
  const [viewMode, setViewMode] = useState("binder");
  const [completionMode, setCompletionMode] = useState("standard");
  const [searchQuery, setSearchQuery] = useState("");
  const [rarityFilter, setRarityFilter] = useState("ALL");
  const [villageFilter, setVillageFilter] = useState("ALL");
  const [ownershipFilter, setOwnershipFilter] = useState("ALL");
  const [copiedTrade, setCopiedTrade] = useState(false);

  const [editingCardId, setEditingCardId] = useState(null);
  const [editForm, setEditForm] = useState({ name: "", subtitle: "", rarity: "C" });

  useEffect(() => {
    try {
      localStorage.setItem("mythosdex_v2_collection", JSON.stringify(collection));
    } catch (e) {
      console.error("Erreur sauvegarde collection", e);
    }
  }, [collection]);

  useEffect(() => {
    try {
      localStorage.setItem("mythosdex_v2_custom_edits", JSON.stringify(customEdits));
    } catch (e) {
      console.error("Erreur sauvegarde éditions", e);
    }
  }, [customEdits]);

  const cards = useMemo(() => {
    return INITIAL_CARDS.map(card => {
      const edit = customEdits[card.id];
      return edit ? { ...card, ...edit } : card;
    });
  }, [customEdits]);

  const startEditing = (card) => {
    setEditingCardId(card.id);
    setEditForm({ name: card.name, subtitle: card.subtitle, rarity: card.rarity });
  };

  const saveEdit = (cardId) => {
    setCustomEdits(prev => ({
      ...prev,
      [cardId]: { name: editForm.name, subtitle: editForm.subtitle, rarity: editForm.rarity }
    }));
    setEditingCardId(null);
  };

  const getCardCounts = (cardId) => collection[cardId] || { s1: 0, s2: 0, s3: 0 };
  const getTotalOwned = (cardId) => {
    const c = getCardCounts(cardId);
    return (c.s1 || 0) + (c.s2 || 0) + (c.s3 || 0);
  };

  const updateSlot = (cardId, slotKey, delta) => {
    setCollection(prev => {
      const current = prev[cardId] || { s1: 0, s2: 0, s3: 0 };
      const nextVal = Math.max(0, (current[slotKey] || 0) + delta);
      return { ...prev, [cardId]: { ...current, [slotKey]: nextVal } };
    });
  };

  const toggleQuickCheck = (cardId) => {
    const total = getTotalOwned(cardId);
    setCollection(prev => ({
      ...prev,
      [cardId]: total > 0 ? { s1: 0, s2: 0, s3: 0 } : { s1: 1, s2: 0, s3: 0 }
    }));
  };

  const setCards = useMemo(() => cards.filter(c => c.setId === selectedSet), [cards, selectedSet]);

  const stats = useMemo(() => {
    if (completionMode === "standard") {
      const stdCards = setCards.filter(c => ["C", "UC", "R"].includes(c.rarity));
      const owned = stdCards.filter(c => getTotalOwned(c.id) > 0).length;
      return { owned, total: stdCards.length, label: `Standard Set (${stdCards.length} cartes)` };
    }
    if (completionMode === "master") {
      let totalSlots = 0;
      let ownedSlots = 0;
      setCards.forEach(c => {
        const counts = getCardCounts(c.id);
        totalSlots += 3;
        if (counts.s1 > 0) ownedSlots++;
        if (counts.s2 > 0) ownedSlots++;
        if (counts.s3 > 0) ownedSlots++;
      });
      return { owned: ownedSlots, total: totalSlots, label: "Master Set (Toutes finitions)" };
    }
    const owned = setCards.filter(c => getTotalOwned(c.id) > 0).length;
    return { owned, total: setCards.length, label: `Set Complet (${setCards.length} réf.)` };
  }, [setCards, collection, completionMode]);

  const filteredCards = useMemo(() => {
    return setCards.filter(card => {
      const matchesSearch = 
        card.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        card.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        card.number.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesRarity = rarityFilter === "ALL" || card.rarity === rarityFilter;
      const matchesVillage = villageFilter === "ALL" || card.village === villageFilter;
      
      const total = getTotalOwned(card.id);
      const matchesOwnership = 
        ownershipFilter === "ALL" ||
        (ownershipFilter === "OWNED" && total > 0) ||
        (ownershipFilter === "MISSING" && total === 0) ||
        (ownershipFilter === "DUPLICATES" && total > 1);

      return matchesSearch && matchesRarity && matchesVillage && matchesOwnership;
    });
  }, [setCards, searchQuery, rarityFilter, villageFilter, ownershipFilter, collection]);

  const generateTradeText = () => {
    const setTitle = selectedSet === "set1" ? "SET 1 : KONOHA SHIDŌ" : selectedSet === "set2" ? "SET 2 : SHINOBI SHIREN" : "SET 3 : AKATSUKI";
    const duplicates = [];
    const missing = [];
    setCards.forEach(c => {
      const counts = getCardCounts(c.id);
      const slots = RARITY_CONFIG[c.rarity]?.slots || ["S1", "S2", "S3"];
      const total = counts.s1 + counts.s2 + counts.s3;
      if (total === 0 && ["C", "UC", "R", "S", "MS"].includes(c.rarity)) {
        missing.push(`${c.number} ${c.name} (${c.rarity})`);
      }
      if (counts.s1 > 1) duplicates.push(`${c.number} ${c.name} [${slots[0]} x${counts.s1 - 1}]`);
      if (counts.s2 > 1) duplicates.push(`${c.number} ${c.name} [${slots[1]} x${counts.s2 - 1}]`);
      if (counts.s3 > 1) duplicates.push(`${c.number} ${c.name} [${slots[2]} x${counts.s3 - 1}]`);
    });

    return `🔥 [ÉCHANGE NARUTO MYTHOS TCG — ${setTitle}] 🔥\n\n✅ MES DOUBLES DISPOS (${duplicates.length}) :\n${duplicates.slice(0, 45).join('\n') || 'Aucun double pour le moment'}\n\n🔍 MES RECHERCHES (${missing.length}) :\n${missing.slice(0, 45).join(', ') || 'Set terminé !'}`;
  };

  const pct = stats.total > 0 ? Math.round((stats.owned / stats.total) * 100) : 0;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pb-16 font-sans">
      <header className="sticky top-0 z-30 bg-slate-900/95 backdrop-blur border-b border-orange-500/30 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center shadow-lg shadow-orange-500/20 font-black text-xl">
              忍
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-black tracking-tight text-white">MYTHOS<span className="text-orange-500">DEX</span></h1>
                <span className="text-[11px] bg-orange-500/20 text-orange-400 border border-orange-500/40 px-2 py-0.5 rounded-full font-semibold">
                  v2.5 • 336 Cartes
                </span>
              </div>
              <p className="text-xs text-slate-400">Set 1 & Set 2 Complets</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <select 
              value={selectedSet} 
              onChange={e => setSelectedSet(e.target.value)}
              className="bg-slate-800 border border-slate-700 text-sm rounded-lg px-3 py-2 text-white font-semibold focus:border-orange-500 outline-none"
            >
              <option value="set1">🍃 Set 1 : Konoha Shidō (158 réf.)</option>
              <option value="set2">⚡ Set 2 : Shinobi Shiren (172 réf.)</option>
              <option value="set3">☁️ Set 3 : Akatsuki (Aperçu)</option>
            </select>

            <select 
              value={completionMode} 
              onChange={e => setCompletionMode(e.target.value)}
              className="bg-slate-800 border border-orange-500/40 text-sm rounded-lg px-3 py-2 text-orange-300 font-semibold focus:border-orange-500 outline-none"
            >
              <option value="standard">🎯 Objectif : Standard Set</option>
              <option value="full">🏆 Objectif : Set Complet</option>
              <option value="master">👑 Objectif : Master Set</option>
            </select>
          </div>
        </div>

        <div className="bg-slate-950/60 border-t border-slate-800/80 px-4 py-2">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <Trophy className="w-4 h-4 text-orange-400" />
              <span className="font-semibold">{stats.label} :</span>
              <span className="text-white font-bold">{stats.owned} / {stats.total}</span>
              <span className="text-orange-400 font-black">({pct}%)</span>
            </div>
            <div className="w-full sm:w-96 h-2.5 bg-slate-800 rounded-full overflow-hidden border border-slate-700">
              <div 
                className="h-full bg-gradient-to-r from-orange-500 via-amber-400 to-emerald-400 transition-all duration-300"
                style={{ width: `${pct}%` }}
              />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 pt-6">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 mb-6 shadow-lg space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800">
              <button
                onClick={() => setViewMode("binder")}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                  viewMode === "binder" ? "bg-orange-600 text-white shadow" : "text-slate-400 hover:text-white"
                }`}
              >
                <Grid className="w-4 h-4" /> Classeur
              </button>
              <button
                onClick={() => setViewMode("checklist")}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                  viewMode === "checklist" ? "bg-orange-600 text-white shadow" : "text-slate-400 hover:text-white"
                }`}
              >
                <List className="w-4 h-4" /> Checklist Rapide
              </button>
              <button
                onClick={() => setViewMode("trades")}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                  viewMode === "trades" ? "bg-orange-600 text-white shadow" : "text-slate-400 hover:text-white"
                }`}
              >
                <Repeat className="w-4 h-4" /> Échanges / Doubles
              </button>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {[
                { id: "ALL", label: "Toutes" },
                { id: "OWNED", label: "Possédées" },
                { id: "MISSING", label: "Manquantes" },
                { id: "DUPLICATES", label: "Doubles" }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setOwnershipFilter(tab.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition ${
                    ownershipFilter === tab.id 
                      ? "bg-orange-500/20 border-orange-500 text-orange-300" 
                      : "bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Rechercher un ninja, numéro..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3 py-2 text-sm text-white placeholder-slate-500 focus:border-orange-500 outline-none"
              />
            </div>

            <select
              value={rarityFilter}
              onChange={e => setRarityFilter(e.target.value)}
              className="bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-sm text-slate-200 focus:border-orange-500 outline-none"
            >
              <option value="ALL">💎 Toutes les raretés</option>
              <option value="C">Commune (C)</option>
              <option value="UC">Peu Commune (UC)</option>
              <option value="R">Rare & Rare Art (R)</option>
              <option value="S">Secrète (S)</option>
              <option value="MV">Mythos V (MV)</option>
              <option value="SGV">Secret Gold /50 (SGV)</option>
              <option value="L">Légendaire 22K</option>
              <option value="M">Promos Mythos</option>
              <option value="MS">Missions</option>
            </select>

            <select
              value={villageFilter}
              onChange={e => setVillageFilter(e.target.value)}
              className="bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-sm text-slate-200 focus:border-orange-500 outline-none"
            >
              <option value="ALL">🍃 Tous les Villages / Groupes</option>
              <option value="Konoha">Konoha</option>
              <option value="Oto">Oto</option>
              <option value="Suna">Suna</option>
              <option value="Akatsuki">Akatsuki</option>
              <option value="Indépendant">Indépendant</option>
            </select>
          </div>
        </div>

        {viewMode === "binder" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredCards.map(card => {
              const counts = getCardCounts(card.id);
              const total = counts.s1 + counts.s2 + counts.s3;
              const isOwned = total > 0;
              const rConfig = RARITY_CONFIG[card.rarity] || RARITY_CONFIG.C;
              const isEditing = editingCardId === card.id;

              return (
                <div
                  key={card.id}
                  className={`rounded-2xl border p-4 transition-all flex flex-col justify-between ${
                    isOwned
                      ? "bg-gradient-to-b from-slate-900 to-slate-900/90 border-orange-500/50 shadow-lg shadow-orange-500/5"
                      : "bg-slate-900/40 border-slate-800/80 opacity-75 hover:opacity-100"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-slate-950 text-slate-300 border border-slate-800">
                        #{card.number}
                      </span>
                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => isEditing ? setEditingCardId(null) : startEditing(card)}
                          title="Modifier"
                          className="p-1 rounded bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white"
                        >
                          <Edit3 className="w-3.5 h-3.5" />
                        </button>
                        <span className={`text-[11px] px-2 py-0.5 rounded-full border font-bold ${rConfig.color}`}>
                          {rConfig.label}
                        </span>
                      </div>
                    </div>

                    {isEditing ? (
                      <div className="bg-slate-950 border border-orange-500/50 rounded-xl p-2.5 mb-3 space-y-2">
                        <input
                          type="text"
                          value={editForm.name}
                          onChange={e => setEditForm({ ...editForm, name: e.target.value })}
                          className="w-full bg-slate-900 border border-slate-700 rounded px-2 py-1 text-xs text-white"
                          placeholder="Nom"
                        />
                        <input
                          type="text"
                          value={editForm.subtitle}
                          onChange={e => setEditForm({ ...editForm, subtitle: e.target.value })}
                          className="w-full bg-slate-900 border border-slate-700 rounded px-2 py-1 text-xs text-orange-300"
                          placeholder="Sous-titre"
                        />
                        <div className="flex justify-end gap-1.5">
                          <button
                            onClick={() => setEditingCardId(null)}
                            className="px-2 py-1 rounded bg-slate-800 text-xs text-slate-300 flex items-center gap-1"
                          >
                            <X className="w-3 h-3" /> Annuler
                          </button>
                          <button
                            onClick={() => saveEdit(card.id)}
                            className="px-2 py-1 rounded bg-emerald-600 text-xs text-white font-bold flex items-center gap-1"
                          >
                            <Save className="w-3 h-3" /> Sauver
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-start justify-between gap-2 mb-3">
                        <div>
                          <h3 className="font-black text-base text-white leading-tight">{card.name}</h3>
                          <p className="text-xs text-orange-400 font-medium mt-0.5">{card.subtitle}</p>
                        </div>
                        <button
                          onClick={() => toggleQuickCheck(card.id)}
                          className={`w-8 h-8 rounded-xl flex items-center justify-center border transition shrink-0 ${
                            isOwned
                              ? "bg-emerald-500 border-emerald-400 text-slate-950 shadow-md shadow-emerald-500/20"
                              : "bg-slate-950 border-slate-700 text-slate-500 hover:border-orange-500"
                          }`}
                        >
                          <Check className="w-5 h-5 stroke-[3]" />
                        </button>
                      </div>
                    )}

                    <div className="flex items-center justify-between text-[11px] text-slate-400 bg-slate-950/70 px-2.5 py-1.5 rounded-lg mb-3 border border-slate-800/60">
                      <span>Village : <strong className="text-slate-200">{card.village}</strong></span>
                      {card.rarity !== "MS" && (
                        <span>⚡ Pwr <strong className="text-amber-400">{card.power}</strong> • 💧 Chk <strong className="text-sky-400">{card.chakra}</strong></span>
                      )}
                    </div>

                    {card.notes && (
                      <p className="text-[11px] text-amber-300/90 bg-amber-500/10 border border-amber-500/20 rounded-lg px-2.5 py-1 mb-3">
                        ✨ {card.notes}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-3 gap-1.5 pt-2 border-t border-slate-800">
                    {["s1", "s2", "s3"].map((slotKey, idx) => {
                      const label = rConfig.slots[idx];
                      const val = counts[slotKey] || 0;
                      return (
                        <div key={slotKey} className="bg-slate-950 border border-slate-800 rounded-xl p-1.5 text-center">
                          <div className="text-[10px] text-slate-400 truncate font-semibold mb-1" title={label}>
                            {label}
                          </div>
                          <div className="flex items-center justify-between px-1">
                            <button
                              onClick={() => updateSlot(card.id, slotKey, -1)}
                              className="w-5 h-5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center text-xs"
                            >
                              -
                            </button>
                            <span className={`text-xs font-black ${val > 0 ? "text-emerald-400" : "text-slate-500"}`}>
                              {val}
                            </span>
                            <button
                              onClick={() => updateSlot(card.id, slotKey, 1)}
                              className="w-5 h-5 rounded bg-orange-600/80 hover:bg-orange-500 text-white flex items-center justify-center text-xs"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {viewMode === "checklist" && (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-slate-950 text-slate-400 text-xs uppercase border-b border-slate-800">
                    <th className="py-3 px-4">État</th>
                    <th className="py-3 px-3">N°</th>
                    <th className="py-3 px-4">Personnage & Sous-titre</th>
                    <th className="py-3 px-3">Rareté</th>
                    <th className="py-3 px-4 text-center">Finition 1</th>
                    <th className="py-3 px-4 text-center">Finition 2</th>
                    <th className="py-3 px-4 text-center">Finition 3</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/70">
                  {filteredCards.map(card => {
                    const counts = getCardCounts(card.id);
                    const isOwned = counts.s1 + counts.s2 + counts.s3 > 0;
                    const rConfig = RARITY_CONFIG[card.rarity] || RARITY_CONFIG.C;

                    return (
                      <tr key={card.id} className={isOwned ? "bg-emerald-950/10" : "hover:bg-slate-800/40"}>
                        <td className="py-2.5 px-4">
                          <button
                            onClick={() => toggleQuickCheck(card.id)}
                            className={`w-6 h-6 rounded-md flex items-center justify-center border ${
                              isOwned ? "bg-emerald-500 border-emerald-400 text-slate-950" : "bg-slate-950 border-slate-700 text-transparent"
                            }`}
                          >
                            <Check className="w-4 h-4 stroke-[3]" />
                          </button>
                        </td>
                        <td className="py-2.5 px-3 font-mono text-xs font-bold text-slate-300">{card.number}</td>
                        <td className="py-2.5 px-4">
                          <div className="font-bold text-white">{card.name}</div>
                          <div className="text-xs text-slate-400">{card.subtitle}</div>
                        </td>
                        <td className="py-2.5 px-3">
                          <span className={`text-[10px] px-2 py-0.5 rounded-full border font-bold ${rConfig.color}`}>
                            {card.rarity}
                          </span>
                        </td>
                        {["s1", "s2", "s3"].map((slotKey, i) => (
                          <td key={slotKey} className="py-2.5 px-4 text-center">
                            <div className="inline-flex items-center gap-1.5 bg-slate-950 border border-slate-800 px-2 py-1 rounded-lg">
                              <button onClick={() => updateSlot(card.id, slotKey, -1)} className="text-slate-400 hover:text-white px-1">-</button>
                              <span className="text-xs font-bold min-w-[20px] text-center">
                                {counts[slotKey] || 0}
                              </span>
                              <button onClick={() => updateSlot(card.id, slotKey, 1)} className="text-orange-400 hover:text-orange-300 px-1">+</button>
                            </div>
                            <div className="text-[10px] text-slate-500 mt-0.5">{rConfig.slots[i]}</div>
                          </td>
                        ))}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {viewMode === "trades" && (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h2 className="text-lg font-bold text-white">Générateur d'annonce d'échange</h2>
                <p className="text-xs text-slate-400">Généré automatiquement à partir de tes cartes manquantes et de tes doubles.</p>
              </div>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(generateTradeText());
                  setCopiedTrade(true);
                  setTimeout(() => setCopiedTrade(false), 2000);
                }}
                className="flex items-center gap-2 bg-orange-600 hover:bg-orange-500 text-white font-bold px-4 py-2 rounded-xl text-sm shadow-lg"
              >
                {copiedTrade ? <CheckCircle2 className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                {copiedTrade ? "Copié !" : "Copier mon annonce"}
              </button>
            </div>
            <pre className="bg-slate-950 border border-slate-800 rounded-xl p-4 text-xs text-slate-300 whitespace-pre-wrap font-mono max-h-96 overflow-y-auto">
              {generateTradeText()}
            </pre>
          </div>
        )}
      </main>
    </div>
  );
}