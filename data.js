    // data.js

    // Definizione del tipo player_type
    const player_type = {
        name: "Nome Giocatore",
        team: "Nome Squadra",
        number: 0,
        g1: 0.0,
        stats_g1: Array(19).fill(0),
        g2: 0.0,
        stats_g2: Array(19).fill(0),
        g3: 0.0,
        stats_g3: Array(19).fill(0),
        semi: 0.0,
        stats_semi: Array(19).fill(0),
        td3: 0.0,
        stats_td3: Array(13).fill(0),
        final: 0.0,
        stats_final: Array(19).fill(0),
        tot: 0.0,
        cost: 0
    };
//questo array sarà da riempire per ogni giocatore per ogni partita
//poi il resto (player.g1 ecc viene calcolato in automatico)
//                   0    1   2   3    4   5   6    7   8    9     10  11  12  13  14   15  16  17   18
// gx_stats =      [PTS, 2P, 2Px, 3P, 3Px, FT, FTx, DR, OR, Rtot, ASS, TO, ST, BL, EXP, DD, TD, Win, Meme]
//pesi per ogni stat (totale sarà calcolato con sumproduct)




    // Definizione del tipo rione_type
    const rione_type = {
        name: "Nome Rione",
        final_points: 0
    };

    // Definizione del tipo fantateam_type
    const fantateam_type = {
        team_index: 0,
        name: "Nome Fantasquadra",
        p1: { ...player_type }, // Esempio di inclusione di player_type come attributo di fantateam_type
        p2: { ...player_type },
        p3: { ...player_type },
        p4: { ...player_type },
        p5: { ...player_type },
        rione: { ...rione_type }, // Esempio di inclusione di rione_type come attributo di fantateam_type
        total_cost : 0,
        tot_g1: 0.0,
        tot_g2: 0.0,
        tot_g3: 0.0,
        tot_semi: 0.0,
        tot_td3: 0.0,
        tot_final: 0.0,
        tot_team: 0.0,
    };

    // Funzione per creare un nuovo giocatore
function createPlayer(name, cost, team, number) {
    const player = { ...player_type, team: team, number:number, name: name, cost: cost }
    return player;
}

//questo fatto da chatgpt dandogli nomi costo squadra e numero
// Creazione dei giocatori per il team WEST
const MassimilianoMoretti24 = createPlayer("Massimiliano Moretti", 11, "WEST", 13);
const AndreaMoretti24 = createPlayer("Andrea Moretti", 4, "WEST", 24);
const LarryTrevisan24 = createPlayer("Larry Trevisan", 6, "WEST", 23);
const AlessandroCostantini24 = createPlayer("Alessandro Costantini", 7, "WEST", 4);
const MatteoMargarit24 = createPlayer("Matteo Margarit", 7, "WEST", 22);
const MauroCuridori24 = createPlayer("Mauro Curidori", 5, "WEST", 2);
const ChristianZanet24 = createPlayer("Christian Zanet", 6, "WEST", 9);
const GiacomoPiacentini24 = createPlayer("Giacomo Piacentini", 5, "WEST", 20);
const GiovanniDalFarra24 = createPlayer("Giovanni dal Farra", 4, "WEST", 7);
const MiracleObichukwu24 = createPlayer("Miracle Obichukwu", 4, "WEST", 14);
const LucaDellaLonga24 = createPlayer("Luca della Longa", 4, "WEST", 3);
const AlessandroRojatti24 = createPlayer("Alessandro Rojatti", 4, "WEST", 12);
const MicheleGorasso24 = createPlayer("Michele Gorasso", 5, "WEST", 21);
const GiacomoFerigo24 = createPlayer("Giacomo Ferigo", 4, "WEST", 16);
const UmbertoNobile24 = createPlayer("Umberto Nobile", 7, "WEST", 15);
const DevinChiarcos24 = createPlayer("Devin Chiarcos", 4, "WEST", 18);
const ValentinoCigainero24 = createPlayer("Valentino Cigainero", 5, "WEST", 0);
const MicheleDeAnna24 = createPlayer("Michele de Anna", 6, "WEST", 19);
const DavideParon24 = createPlayer("Davide Paron", 4, "WEST", 6);
const AlessioFurlan24 = createPlayer("Alessio Furlan", 4, "WEST", 10);
const MichaelMargarit24 = createPlayer("Michael Margarit", 4, "WEST", 0);
const SebastianoTonizzo24 = createPlayer("Sebastiano Tonizzo", 4, "WEST", 5);

// Creazione dei giocatori per il team NORD
const DanieleGanzit24 = createPlayer("Daniele Ganzit", 5, "NORD", 20);
const GiacomoSilvestri24 = createPlayer("Giacomo Silvestri", 5, "NORD", 9);
const VittorioGri24 = createPlayer("Vittorio Gri", 5, "NORD", 11);
const VittorioBasso24 = createPlayer("Vittorio Basso", 4, "NORD", 8);
const AlessandroRizzi24 = createPlayer("Alessandro Rizzi", 7, "NORD", 10);
const MassimoBaldassi24 = createPlayer("Massimo Baldassi", 4, "NORD", 0);
const GabrieleMiani24 = createPlayer("Gabriele Miani", 14, "NORD", 14);
const MarcoMarchetti24 = createPlayer("Marco Marchetti", 4, "NORD", 0);
const MarcoLombardo24 = createPlayer("Marco Lombardo", 7, "NORD", 15);
const MicheleVendrame24 = createPlayer("Michele Vendrame", 4, "NORD", 13);
const LorenzoSchinella24 = createPlayer("Lorenzo Schinella", 4, "NORD", 3);
const GioeleTudini24 = createPlayer("Gioele Tudini", 4, "NORD", 7);
const FilippoPasquon24 = createPlayer("Filippo Pasquon", 5, "NORD", 2);
const TommasoMartello24 = createPlayer("Tommaso Martello", 6, "NORD", 16);
const MarcoRizzi24 = createPlayer("Marco Rizzi", 4, "NORD", 6);
const DavidGaspardo24 = createPlayer("David Gaspardo", 9, "NORD", 19);
const AntonioGri24 = createPlayer("Antonio Gri", 4, "NORD", 5);
const RiccardoSchinella24 = createPlayer("Riccardo Schinella", 4, "NORD", 1);

// Creazione dei giocatori per il team SUD
const SimoneMartinelli24 = createPlayer("Simone Martinelli", 4, "SUD", 22);
const MatteoSpagnolo24 = createPlayer("Matteo Spagnolo", 4, "SUD", 21);
const DavideFaurlin24 = createPlayer("Davide Faurlin", 4, "SUD", 18);
const GiovanniTonizzo24 = createPlayer("Giovanni Tonizzo", 5, "SUD", 5);
const AlessandroSant24 = createPlayer("Alessandro Sant", 8, "SUD", 7);
const MatteoBazzaro24 = createPlayer("Matteo Bazzaro", 4, "SUD", 1);
const AlessandroSantin24 = createPlayer("Alessandro Santin", 4, "SUD", 10);
const AlessandroGalassi24 = createPlayer("Alessandro Galassi", 5, "SUD", 19);
const PietroSoramel24 = createPlayer("Pietro Soramel", 6, "SUD", 16);
const FilippoAgnoluzzi24 = createPlayer("Filippo Agnoluzzi", 4, "SUD", 2);
const EmanueleDaneluzzi24 = createPlayer("Emanuele Daneluzzi", 5, "SUD", 6);
const LucaSoramel24 = createPlayer("Luca Soramel", 5, "SUD", 12);
const PaoloZorzi24 = createPlayer("Paolo Zorzi", 4, "SUD", 9);
const ChristianFedrizzi24 = createPlayer("Christian Fedrizzi", 4, "SUD", 3);
const FilippoSappa24 = createPlayer("Filippo Sappa", 8, "SUD", 15);
const GiovanniZanin24 = createPlayer("Giovanni Zanin", 9, "SUD", 23);
const EnricoSant24 = createPlayer("Enrico Sant", 5, "SUD", 4);
const StefanoPolano24 = createPlayer("Stefano Polano", 5, "SUD", 17);

// Creazione dei giocatori per il team EST
const MarcoPolo24 = createPlayer("Marco Polo", 4, "EST", 15);
const MarcoSerrao24 = createPlayer("Marco Serrao", 7, "EST", 8);
const WilliamIob24 = createPlayer("William Iob", 7, "EST", 12);
const DavideBroggi24 = createPlayer("Davide Broggi", 4, "EST", 3);
const AlexMicottis24 = createPlayer("Alex Micottis", 4, "EST", 21);
const MassimilianoRossi24 = createPlayer("Massimiliano Rossi", 4, "EST", 22);
const MassimoMasotti24 = createPlayer("Massimo Masotti", 4, "EST", 10);
const EugenioDeTina24 = createPlayer("Eugenio De Tina", 5, "EST", 9);
const LucaAnedda24 = createPlayer("Luca Anedda", 4, "EST", 5);
const DenisVanin24 = createPlayer("Denis Vanin", 4, "EST", 17);
const ThomasBaracetti24 = createPlayer("Thomas Baracetti", 4, "EST", 2);
const LucaGemo24 = createPlayer("Luca Gemo", 4, "EST", 6);
const DiegoNata24 = createPlayer("Diego Nata", 9, "EST", 19);
const MattiaRoiatti24 = createPlayer("Mattia Roiatti", 4, "EST", 11);
const EdoardoPicogna24 = createPlayer("Edoardo Picogna", 4, "EST", 7);
const MauroPerina24 = createPlayer("Mauro Perina", 4, "EST", 18);
const LorenzoMoro24 = createPlayer("Lorenzo Moro", 5, "EST", 14);
const GionaTell24 = createPlayer("Giona Tell", 5, "EST", 4);
const IacopoPivetta24 = createPlayer("Iacopo Pivetta", 6, "EST", 20);
const MattiaMasotti24 = createPlayer("Mattia Masotti", 6, "EST", 13);





    // Definizione Rioni
    const NORD = { ...rione_type, name: "NORD", final_points: 10 };
    const SUD  = { ...rione_type, name: "SUD", final_points: 0 };
    const EST  = { ...rione_type, name: "EST", final_points: 5 };
    const WEST = { ...rione_type, name: "WEST", final_points: 20 };
    //questo commentone da non cancellare che serve per averli vuoti prima di riempirli
    // //                               | | | | | | | | | | | | | | | | | | | 
    // //     gx_stats =             [PTS, 2Px,3Px,FTx, OR, ASS,ST,EXP,TD,Meme]
    // //     gx_stats =                |2P,|3P,|FT,|DR,|Rt,|TO,|BL,|DD,|Win|
    // //                               | | | | | | | | | | | | | | | | | | | 
    // MassimilianoMoretti.stats_g2=   []; //13
    // AndreaMoretti.stats_g2 =        []; //24
    // LarryTrevisan.stats_g2 =        []; // 23
    // AlessandroCostantini.stats_g2 = []; // 4 
    // MatteoMargarit.stats_g2 =       []; // 22
    // MauroCuridori.stats_g2 =        []; // 2 
    // ChristianZanet.stats_g2 =       []; // 9
    // GiacomoPiacentini.stats_g2 =    []; // 20
    // GiovanniDalFarra.stats_g2 =     []; // 7
    // MiracleObichukwu.stats_g2 =     []; // 14
    // LucaDellaLonga.stats_g2 =       []; // 3
    // //     gx_stats =              PTS,|2Px|3Px|FTx|OR,|ASS|ST,|EXP|TD,|Meme
    // //     gx_stats =                |2P,|3P,|FT,|DR,|Rt,|TO,|BL,|DD,|Win|
    // AlessandroRojatti.stats_g2 =    []; // 12
    // MicheleGorasso.stats_g2 =       []; // 21
    // GiacomoFerigo.stats_g2 =        []; // 16
    // UmbertoNobile.stats_g2 =        []; // 15
    // DevinChiarcos.stats_g2 =        []; // 18
    // ValentinoCigainero.stats_g2 =   []; //
    // MicheleDeAnna.stats_g2 =        []; //
    // DavideParon.stats_g2 =          []; // 6
    // AlessioFurlan.stats_g2 =        []; // 10
    // MichaelMargarit.stats_g2 =      []; //
    // SebastianoTonizzo.stats_g2 =    []; // 5
    // //                               | | | | | | | | | | | | | | | | | | | 
    // //     gx_stats =              PTS,|2Px|3Px|FTx|OR,|ASS|ST,|EXP|TD,|Meme
    // //     gx_stats =                |2P,|3P,|FT,|DR,|Rt,|TO,|BL,|DD,|Win|
    // //                               | | | | | | | | | | | | | | | | | | | 
    // DanieleGanzit.stats_g2 =        []; // 
    // GiacomoSilvestri.stats_g2 =     []; // 9
    // VittorioGri.stats_g2 =          []; // 11
    // VittorioBasso.stats_g2 =        []; // 8
    // AlessandroRizzi.stats_g2 =      []; // 10
    // MassimoBaldassi.stats_g2 =      []; // 
    // GabrieleMiani.stats_g2 =        []; // 14
    // MarcoMarchetti.stats_g2 =       []; // 
    // MarcoLombardo.stats_g2 =        []; // 15
    // //     gx_stats =              PTS,|2Px|3Px|FTx|OR,|ASS|ST,|EXP|TD,|Meme
    // //     gx_stats =                |2P,|3P,|FT,|DR,|Rt,|TO,|BL,|DD,|Win|
    // MicheleVendrame.stats_g2 =      []; // 13
    // LorenzoSchinella.stats_g2 =     []; // 3
    // GioeleTudini.stats_g2 =         []; // 7
    // FilippoPasquon.stats_g2 =       []; // 2
    // TommasoMartello.stats_g2 =      []; // 16
    // MarcoRizzi.stats_g2 =           []; // 6
    // DavidGaspardo.stats_g2 =        []; // 19
    // AntonioGri.stats_g2 =           []; // 5
    // RiccardoSchinella.stats_g2 =    []; // 1
    // //                               | | | | | | | | | | | | | | | | | | | 
    // //     gx_stats =              PTS,|2Px|3Px|FTx|OR,|ASS|ST,|EXP|TD,|Meme
    // //     gx_stats =                |2P,|3P,|FT,|DR,|Rt,|TO,|BL,|DD,|Win|
    // //                               | | | | | | | | | | | | | | | | | | | 
    // SimoneMartinelli.stats_g2 =     []; // 22
    // MatteoSpagnolo.stats_g2 =       []; // 21
    // DavideFaurlin.stats_g2 =        []; // 18
    // GiovanniTonizzo.stats_g2 =      []; // 5
    // AlessandroSant.stats_g2 =       []; // 7
    // MatteoBazzaro.stats_g2 =        []; // 1
    // AlessandroSantin.stats_g2 =     []; // 10
    // AlessandroGalassi.stats_g2 =    []; // 19
    // PietroSoramel.stats_g2 =        []; // 16
    // //     gx_stats =              PTS,|2Px|3Px|FTx|OR,|ASS|ST,|EXP|TD,|Meme
    // //     gx_stats =                |2P,|3P,|FT,|DR,|Rt,|TO,|BL,|DD,|Win|
    // FilippoAgnoluzzi.stats_g2 =     []; // 2
    // EmanueleDaneluzzi.stats_g2 =    []; // 6
    // LucaSoramel.stats_g2 =          []; // 12
    // PaoloZorzi.stats_g2 =           []; // 9
    // ChristianFedrizzi.stats_g2 =    []; // 3
    // FilippoSappa.stats_g2 =         []; // 15
    // GiovanniZanin.stats_g2 =        []; // 23
    // EnricoSant.stats_g2 =           []; // 4
    // StefanoPolano.stats_g2 =        []; // 17
    // //                                 | | | | | | | | | | | | | | | | | | 
    // //     gx_stats =              PTS,|2Px|3Px|FTx|OR,|ASS|ST,|EXP|TD,|Meme
    // //     gx_stats =                |2P,|3P,|FT,|DR,|Rt,|TO,|BL,|DD,|Win|
    // //                               | | | | | | | | | | | | | | | | | | | 
    // MarcoPolo.stats_g2 =            []; // 15
    // MarcoSerrao.stats_g2 =          []; // 8
    // WilliamIob.stats_g2 =           []; // 12
    // DavideBroggi.stats_g2 =         []; // 3
    // AlexMicottis.stats_g2 =         []; // 21
    // MassimilianoRossi.stats_g2 =    []; // 22
    // MassimoMasotti.stats_g2 =       []; // 10
    // EugenioDeTina.stats_g2 =        []; // 9
    // LucaAnedda.stats_g2 =           []; // 5
    // DenisVanin.stats_g2 =           []; // 17
    // //     gx_stats =              PTS,|2Px|3Px|FTx|OR,|ASS|ST,|EXP|TD,|Meme
    // //     gx_stats =                |2P,|3P,|FT,|DR,|Rt,|TO,|BL,|DD,|Win|
    // ThomasBaracetti.stats_g2 =      []; // 2
    // LucaGemo.stats_g2 =             []; // 6
    // DiegoNata.stats_g2 =            []; // 19
    // MattiaRoiatti.stats_g2 =        []; // 11
    // EdoardoPicogna.stats_g2 =       []; // 7
    // MauroPerina.stats_g2 =          []; // 18
    // LorenzoMoro.stats_g2 =          []; // 14
    // GionaTell.stats_g2 =            []; // 4
    // IacopoPivetta.stats_g2 =        []; // 20
    // MattiaMasotti.stats_g2 =        []; // 13
    // //                               | | | | | | | | | | | | | | | | | | | 
    // //     gx_stats =              PTS,|2Px|3Px|FTx|OR,|ASS|ST,|EXP|TD,|Meme
    // //     gx_stats =                |2P,|3P,|FT,|DR,|Rt,|TO,|BL,|DD,|Win|
    // //                               | | | | | | | | | | | | | | | | | | | 
    //     gx_stats =             [PTS, 2Px,3Px,FTx, OR, ASS,ST,EXP,TD,Meme]
    //     gx_stats =                |2P,|3P,|FT,|DR,|Rt,|TO,|BL,|DD,|Win|
    //                               | | | | | | | | | | | | | | | | | | | 
    MassimilianoMoretti24.stats_g1=   [0,2,2,0,1,0,0,2,2,0,0,1,3,0,0,0,0,1,1]; //13
    AndreaMoretti24.stats_g1 =        [0,0,3,0,1,0,0,3,1,0,0,3,0,0,0,0,0,1,0]; //24
    LarryTrevisan24.stats_g1 =        [0,0,2,0,1,1,1,3,1,0,2,1,1,0,0,0,0,1,0]; // 23
    AlessandroCostantini24.stats_g1 = [0,3,0,0,2,0,0,2,0,0,0,0,0,0,0,0,0,1,1]; // 4 
    MatteoMargarit24.stats_g1 =       [0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1]; // 22
    MauroCuridori24.stats_g1 =        [0,2,0,1,2,0,0,2,0,0,1,3,1,0,0,0,0,1,0]; // 2 
    ChristianZanet24.stats_g1 =       [0,0,0,0,1,0,0,0,0,0,1,2,0,0,0,0,0,1,0]; // 9
    GiacomoPiacentini24.stats_g1 =    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0]; // 20
    GiovanniDalFarra24.stats_g1 =     [0,1,1,0,1,0,2,1,0,0,0,1,1,0,0,0,0,1,0]; // 7
    MiracleObichukwu24.stats_g1 =     [0,1,2,0,0,2,0,0,2,0,0,1,0,0,0,0,0,1,0]; // 14
    LucaDellaLonga24.stats_g1 =       [0,0,1,0,0,2,0,1,0,0,1,3,0,0,0,0,0,1,0]; // 3
    AlessandroRojatti24.stats_g1 =    [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0]; // 12
    MicheleGorasso24.stats_g1 =       [0,2,2,0,1,2,1,1,1,0,1,0,1,0,0,0,0,1,0]; // 21
    GiacomoFerigo24.stats_g1 =        [0,0,0,1,1,0,0,2,0,0,1,1,1,0,0,0,0,1,0]; // 16
    UmbertoNobile24.stats_g1 =        [0,2,0,0,0,2,0,5,3,0,5,0,1,0,0,0,0,1,0]; // 15
    DevinChiarcos24.stats_g1 =        [0,2,2,4,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1]; // 18
    ValentinoCigainero24.stats_g1 =   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0]; //
    MicheleDeAnna24.stats_g1 =        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0]; //
    DavideParon24.stats_g1 =          [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0]; // 6
    AlessioFurlan24.stats_g1 =        [0,0,2,1,0,2,0,1,0,0,0,0,0,0,0,0,0,1,1]; // 10
    MichaelMargarit24.stats_g1 =      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0]; //
    SebastianoTonizzo24.stats_g1 =    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0]; // 5
    //                               | | | | | | | | | | | | | | | | | | | 
    //     gx24_stats =              PTS,|2Px|3Px|FTx|OR,|ASS|ST,|EXP|TD,|Meme
    //     gx24_stats =                |2P,|3P,|FT,|DR,|Rt,|TO,|BL,|DD,|Win|
    //                               | | | | | | | | | | | | | | | | | | | 
    DanieleGanzit24.stats_g1 =        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2]; // 
    GiacomoSilvestri24.stats_g1 =     [0,0,0,0,1,1,1,0,0,0,0,2,0,0,0,0,0,1,3]; // 9
    VittorioGri24.stats_g1 =          [0,1,5,0,0,0,0,1,0,0,0,2,1,0,0,0,0,1,3]; // 11
    VittorioBasso24.stats_g1 =        [0,0,2,0,0,0,2,0,0,0,0,0,0,0,0,0,0,1,2]; // 8
    AlessandroRizzi24.stats_g1 =      [0,0,2,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,3]; // 10
    MassimoBaldassi24.stats_g1 =      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2]; // 
    GabrieleMiani24.stats_g1 =        [0,6,3,3,3,3,0,3,7,0,2,1,1,0,0,0,0,1,3]; // 14
    MarcoMarchetti24.stats_g1 =       [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2]; // 
    MarcoLombardo24.stats_g1 =        [0,1,5,0,0,2,1,3,4,0,0,1,1,0,0,0,0,1,2]; // 15
    MicheleVendrame24.stats_g1 =      [0,2,0,0,0,0,0,2,0,0,0,1,0,0,0,0,0,1,2]; // 13
    LorenzoSchinella24.stats_g1 =     [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2]; // 3
    GioeleTudini24.stats_g1 =         [0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,2]; // 7
    FilippoPasquon24.stats_g1 =       [0,1,0,0,3,0,2,1,1,0,1,0,3,0,0,0,0,1,2]; // 2
    TommasoMartello24.stats_g1 =      [0,3,2,0,1,2,5,0,0,0,0,2,2,0,0,0,0,1,2]; // 16
    MarcoRizzi24.stats_g1 =           [0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,2]; // 6
    DavidGaspardo24.stats_g1 =        [0,0,1,1,7,0,0,7,1,0,2,3,1,0,0,0,0,1,2]; // 19  //1 tripla sbagliata di troppo
    AntonioGri24.stats_g1 =           [0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,2]; // 5
    RiccardoSchinella24.stats_g1 =    [0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,2]; // 1
    //                               | | | | | | | | | | | | | | | | | | | 
    //     gx24_stats =              PTS,|2Px|3Px|FTx|OR,|ASS|ST,|EXP|TD,|Meme
    //     gx24_stats =                |2P,|3P,|FT,|DR,|Rt,|TO,|BL,|DD,|Win|
    //                               | | | | | | | | | | | | | | | | | | | 
    SimoneMartinelli24.stats_g1 =     [0,1,3,0,4,0,1,0,1,0,0,1,0,0,0,0,0,0,0]; // 22
    MatteoSpagnolo24.stats_g1 =       [0,0,0,0,2,0,0,2,2,0,0,0,2,1,0,0,0,0,0]; // 21
    DavideFaurlin24.stats_g1 =        [0,0,1,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0]; // 18
    GiovanniTonizzo24.stats_g1 =      [0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0]; // 5
    AlessandroSant24.stats_g1 =       [0,0,3,0,4,4,2,0,0,0,1,1,1,1,0,0,0,0,0]; // 7
    MatteoBazzaro24.stats_g1 =        [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; // 1
    AlessandroSantin24.stats_g1 =     [0,0,2,0,2,0,0,1,0,0,0,0,0,0,0,0,0,0,0]; // 10
    AlessandroGalassi24.stats_g1 =    [0,0,2,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0]; // 19
    PietroSoramel24.stats_g1 =        [0,1,2,2,0,0,0,1,2,0,1,0,2,0,0,0,0,0,0]; // 16
    FilippoAgnoluzzi24.stats_g1 =     [0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; // 2
    EmanueleDaneluzzi24.stats_g1 =    [0,0,0,0,0,2,0,2,1,0,0,2,0,0,0,0,0,0,0]; // 6
    LucaSoramel24.stats_g1 =          [0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0]; // 12
    PaoloZorzi24.stats_g1 =           [0,0,1,1,0,0,0,0,1,0,0,2,1,1,0,0,0,0,0]; // 9
    ChristianFedrizzi24.stats_g1 =    [0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; // 3
    FilippoSappa24.stats_g1 =         [0,3,4,0,2,5,1,3,6,0,2,3,2,0,0,0,0,0,1]; // 15
    GiovanniZanin24.stats_g1 =        [0,1,6,0,3,3,4,6,4,0,2,4,0,0,0,0,0,0,1]; // 23
    EnricoSant24.stats_g1 =           [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; // 4
    StefanoPolano24.stats_g1 =        [0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; // 17
    //                               | | | | | | | | | | | | | | | | | | | 
    //     gx24_stats =              PTS,|2Px|3Px|FTx|OR,|ASS|ST,|EXP|TD,|Meme
    //     gx24_stats =                |2P,|3P,|FT,|DR,|Rt,|TO,|BL,|DD,|Win|
    //                               | | | | | | | | | | | | | | | | | | | 
    MarcoPolo24.stats_g1 =            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3]; // 15
    MarcoSerrao24.stats_g1 =          [0,3,6,2,2,2,1,5,2,0,2,1,0,1,0,0,0,0,3]; // 8
    WilliamIob24.stats_g1 =           [0,4,2,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,4]; // 12
    DavideBroggi24.stats_g1 =         [0,0,2,0,0,2,0,1,0,0,0,1,2,0,0,0,0,0,3]; // 3
    AlexMicottis24.stats_g1 =         [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3]; // 21
    MassimilianoRossi24.stats_g1 =    [0,0,0,0,2,0,0,1,0,0,0,2,2,0,0,0,0,0,3]; // 22
    MassimoMasotti24.stats_g1 =       [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3]; // 10
    EugenioDeTina24.stats_g1 =        [0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,3]; // 9
    LucaAnedda24.stats_g1 =           [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4]; // 5
    DenisVanin24.stats_g1 =           [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4]; // 17
    ThomasBaracetti24.stats_g1 =      [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,3]; // 2
    LucaGemo24.stats_g1 =             [0,0,0,0,0,0,0,1,0,0,1,3,0,0,0,0,0,0,3]; // 6
    DiegoNata24.stats_g1 =            [0,3,6,1,0,0,0,6,2,0,1,2,3,0,0,0,0,0,1]; // 19
    MattiaRoiatti24.stats_g1 =        [0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,4]; // 11
    EdoardoPicogna24.stats_g1 =       [0,0,0,0,2,1,1,0,0,0,0,2,1,0,0,0,0,0,4]; // 7
    MauroPerina24.stats_g1 =          [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3]; // 18
    LorenzoMoro24.stats_g1 =          [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8]; // 14
    GionaTell24.stats_g1 =            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3]; // 4
    IacopoPivetta24.stats_g1 =        [0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,4]; // 20
    MattiaMasotti24.stats_g1 =        [0,3,5,0,4,2,3,2,4,0,0,2,1,1,0,0,0,0,3]; // 13
    //                               | | | | | | | | | | | | | | | | | | | 
    //     gx24_stats =              PTS,|2Px|3Px|FTx|OR,|ASS|ST,|EXP|TD,|Meme
    //     gx24_stats =                |2P,|3P,|FT,|DR,|Rt,|TO,|BL,|DD,|Win|
    //                               | | | | | | | | | | | | | | | | | | | 
    //     gx24_stats =             [PTS, 2Px,3Px,FTx, OR, ASS,ST,EXP,TD,Meme]
    //     gx24_stats =                |2P,|3P,|FT,|DR,|Rt,|TO,|BL,|DD,|Win|
    //                               | | | | | | | | | | | | | | | | | | | 
    MassimilianoMoretti24.stats_g2=   [0,2,4,1,0,1,4,4,2,0,0,5,2,0,1,0,0,1,1]; //13
    AndreaMoretti24.stats_g2 =        [0,0,1,0,0,1,1,3,0,0,0,0,0,0,0,0,0,1,0]; //24
    LarryTrevisan24.stats_g2 =        [0,2,1,0,2,0,0,1,0,0,0,0,0,0,0,0,0,1,0]; // 23
    AlessandroCostantini24.stats_g2 = [0,1,0,2,0,4,0,1,1,0,2,0,0,1,0,0,0,1,1]; // 4 
    MatteoMargarit24.stats_g2 =       [0,2,1,0,1,0,0,6,2,0,1,1,0,0,0,0,0,1,0]; // 22
    MauroCuridori24.stats_g2 =        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0]; // 2 
    ChristianZanet24.stats_g2 =       [0,1,1,0,0,1,0,1,0,0,0,3,1,0,0,0,0,1,0]; // 9
    GiacomoPiacentini24.stats_g2 =    [0,0,1,0,2,0,0,0,0,0,0,1,0,0,0,0,0,1,0]; // 20
    GiovanniDalFarra24.stats_g2 =     [0,0,2,0,2,1,1,0,0,0,0,0,0,0,0,0,0,1,0]; // 7 //manca 1 assist
    MiracleObichukwu24.stats_g2 =     [0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0]; // 14
    LucaDellaLonga24.stats_g2 =       [0,0,2,0,0,0,0,1,1,0,0,2,1,0,0,0,0,1,0]; // 3
    //     gx24_stats =              PTS,|2Px|3Px|FTx|OR,|ASS|ST,|EXP|TD,|Meme
    //     gx24_stats =                |2P,|3P,|FT,|DR,|Rt,|TO,|BL,|DD,|Win|
    AlessandroRojatti24.stats_g2 =    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0]; // 12
    MicheleGorasso24.stats_g2 =       [0,0,2,0,0,0,0,2,0,0,0,2,1,0,0,0,0,1,0]; // 21
    GiacomoFerigo24.stats_g2 =        [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0]; // 16
    UmbertoNobile24.stats_g2 =        [0,2,1,1,0,7,1,4,1,0,3,1,0,0,0,0,0,1,1]; // 15
    DevinChiarcos24.stats_g2 =        [0,0,0,0,1,0,0,4,0,0,0,1,0,0,0,0,0,1,0]; // 18
    ValentinoCigainero24.stats_g2 =   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0]; //
    MicheleDeAnna24.stats_g2 =        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0]; //
    DavideParon24.stats_g2 =          [0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0]; // 6
    AlessioFurlan24.stats_g2 =        [0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0]; // 10
    MichaelMargarit24.stats_g2 =      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0]; //
    SebastianoTonizzo24.stats_g2 =    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0]; // 5
    //                               | | | | | | | | | | | | | | | | | | | 
    //     gx24_stats =              PTS,|2Px|3Px|FTx|OR,|ASS|ST,|EXP|TD,|Meme
    //     gx24_stats =                |2P,|3P,|FT,|DR,|Rt,|TO,|BL,|DD,|Win|
    //                               | | | | | | | | | | | | | | | | | | | 
    DanieleGanzit24.stats_g2 =        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; // 20
    GiacomoSilvestri24.stats_g2 =     [0,2,2,1,1,3,1,1,0,0,0,0,2,0,0,0,0,0,0]; // 9
    VittorioGri24.stats_g2 =          [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; // 11
    VittorioBasso24.stats_g2 =        [0,2,1,0,2,0,0,2,2,0,0,4,1,0,0,0,0,0,0]; // 8
    AlessandroRizzi24.stats_g2 =      [0,1,2,1,1,3,0,2,0,0,0,1,0,0,0,0,0,0,1]; // 10
    MassimoBaldassi24.stats_g2 =      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; // 
    GabrieleMiani24.stats_g2 =        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; // 14
    MarcoMarchetti24.stats_g2 =       [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; // 
    MarcoLombardo24.stats_g2 =        [0,2,1,0,1,2,0,2,1,0,0,1,2,0,0,0,0,0,1]; // 15
    //     gx24_stats =              PTS,|2Px|3Px|FTx|OR,|ASS|ST,|EXP|TD,|Meme
    //     gx24_stats =                |2P,|3P,|FT,|DR,|Rt,|TO,|BL,|DD,|Win|
    MicheleVendrame24.stats_g2 =      [0,0,0,0,0,0,0,3,0,0,0,1,2,0,0,0,0,0,5]; // 13
    LorenzoSchinella24.stats_g2 =     [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]; // 3
    GioeleTudini24.stats_g2 =         [0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0]; // 7
    FilippoPasquon24.stats_g2 =       [0,0,2,0,1,0,0,2,0,0,0,1,0,0,0,0,0,0,0]; // 2
    TommasoMartello24.stats_g2 =      [0,2,2,0,2,2,3,1,0,0,0,2,1,1,0,0,0,0,0]; // 16
    MarcoRizzi24.stats_g2 =           [0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1]; // 6
    DavidGaspardo24.stats_g2 =        [0,3,5,0,7,4,1,6,2,0,0,2,1,1,0,0,0,0,1]; // 19
    AntonioGri24.stats_g2 =           [0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0]; // 5
    RiccardoSchinella24.stats_g2 =    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; // 1
    //                               | | | | | | | | | | | | | | | | | | | 
    //     gx24_stats =              PTS,|2Px|3Px|FTx|OR,|ASS|ST,|EXP|TD,|Meme
    //     gx24_stats =                |2P,|3P,|FT,|DR,|Rt,|TO,|BL,|DD,|Win|
    //                               | | | | | | | | | | | | | | | | | | | 
    SimoneMartinelli24.stats_g2 =     [0,0,3,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0]; // 22 // ho messo vittoria anche asud 
    MatteoSpagnolo24.stats_g2 =       [0,3,3,1,2,0,0,2,0,0,0,2,0,1,0,0,0,0,0]; // 21 // ma hanno perso - modificato
    DavideFaurlin24.stats_g2 =        [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; // 18
    GiovanniTonizzo24.stats_g2 =      [0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1]; // 5
    AlessandroSant24.stats_g2 =       [0,1,4,0,7,6,4,1,0,0,0,1,6,0,0,0,0,0,0]; // 7
    MatteoBazzaro24.stats_g2 =        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; // 1
    AlessandroSantin24.stats_g2 =     [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; // 10
    AlessandroGalassi24.stats_g2 =    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; // 19
    PietroSoramel24.stats_g2 =        [0,1,3,2,3,0,0,1,0,0,2,1,1,0,0,0,0,0,1]; // 16
    //     gx24_stats =              PTS,|2Px|3Px|FTx|OR,|ASS|ST,|EXP|TD,|Meme
    //     gx24_stats =                |2P,|3P,|FT,|DR,|Rt,|TO,|BL,|DD,|Win|
    FilippoAgnoluzzi24.stats_g2 =     [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; // 2
    EmanueleDaneluzzi24.stats_g2 =    [0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0]; // 6
    LucaSoramel24.stats_g2 =          [0,1,1,1,1,0,0,0,0,0,1,2,1,0,0,0,0,0,1]; // 12
    PaoloZorzi24.stats_g2 =           [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; // 9
    ChristianFedrizzi24.stats_g2 =    [0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0]; // 3
    FilippoSappa24.stats_g2 =         [0,4,2,1,4,10,7,7,2,0,2,1,5,0,0,0,0,0,0]; // 15
    GiovanniZanin24.stats_g2 =        [0,2,3,0,1,0,2,8,1,0,3,1,1,0,0,0,0,0,1]; // 23
    EnricoSant24.stats_g2 =           [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; // 4
    StefanoPolano24.stats_g2 =        [0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0]; // 17
    //                                 | | | | | | | | | | | | | | | | | | 
    //     gx24_stats =              PTS,|2Px|3Px|FTx|OR,|ASS|ST,|EXP|TD,|Meme
    //     gx24_stats =                |2P,|3P,|FT,|DR,|Rt,|TO,|BL,|DD,|Win|
    //                               | | | | | | | | | | | | | | | | | | | 
    MarcoPolo24.stats_g2 =            [0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0]; // 15
    MarcoSerrao24.stats_g2 =          [0,0,3,4,0,5,0,3,0,0,2,4,1,0,0,0,0,1,0]; // 8
    WilliamIob24.stats_g2 =           [0,0,0,0,0,0,0,3,0,0,0,3,0,0,0,0,0,1,1]; // 12
    DavideBroggi24.stats_g2 =         [0,0,2,0,1,0,0,2,0,0,0,3,0,0,0,0,0,1,0]; // 3   //manca 5 di tiro da metà (forse)
    AlexMicottis24.stats_g2 =         [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1]; // 21
    MassimilianoRossi24.stats_g2 =    [0,2,1,0,0,1,1,7,1,0,1,1,0,0,0,0,0,1,1]; // 22
    MassimoMasotti24.stats_g2 =       [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0]; // 10
    EugenioDeTina24.stats_g2 =        [0,0,1,1,3,0,0,4,0,0,0,1,0,0,0,0,0,1,0]; // 9
    LucaAnedda24.stats_g2 =           [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1]; // 5
    DenisVanin24.stats_g2 =           [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0]; // 17
    //     gx24_stats =              PTS,|2Px|3Px|FTx|OR,|ASS|ST,|EXP|TD,|Meme
    //     gx24_stats =                |2P,|3P,|FT,|DR,|Rt,|TO,|BL,|DD,|Win|
    ThomasBaracetti24.stats_g2 =      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1]; // 2
    LucaGemo24.stats_g2 =             [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0]; // 6
    DiegoNata24.stats_g2 =            [0,9,6,0,0,3,7,10,6,0,0,2,1,0,0,0,0,1,0]; // 19
    MattiaRoiatti24.stats_g2 =        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1]; // 11
    EdoardoPicogna24.stats_g2 =       [0,1,0,0,3,0,0,1,0,0,0,1,0,0,0,0,0,1,0]; // 7
    MauroPerina24.stats_g2 =          [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1]; // 18
    LorenzoMoro24.stats_g2 =          [0,0,2,0,3,2,2,0,0,0,4,3,1,0,0,0,0,1,0]; // 14
    GionaTell24.stats_g2 =            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0]; // 4
    IacopoPivetta24.stats_g2 =        [0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0]; // 20
    MattiaMasotti24.stats_g2 =        [0,3,3,0,2,0,2,3,2,0,0,1,0,0,0,0,0,1,0]; // 13
    //                               | | | | | | | | | | | | | | | | | | | 
    //     gx24_stats =              PTS,|2Px|3Px|FTx|OR,|ASS|ST,|EXP|TD,|Meme
    //     gx24_stats =                |2P,|3P,|FT,|DR,|Rt,|TO,|BL,|DD,|Win|
    //                               | | | | | | | | | | | | | | | | | | | 
    //questo commentone da non cancellare che serve per averli vuoti prima di riempirli
    //                               | | | | | | | | | | | | | | | | | | | 
    //     gx24_stats =             [PTS, 2Px,3Px,FTx, OR, ASS,ST,EXP,TD,Meme]
    //     gx24_stats =                |2P,|3P,|FT,|DR,|Rt,|TO,|BL,|DD,|Win|
    //                               | | | | | | | | | | | | | | | | | | | 
    MassimilianoMoretti24.stats_g3=   [0,4,0,0,0,0,6,1,1,0,2,2,4,0,0,0,0,1,2]; //13
    AndreaMoretti24.stats_g3 =        [0,0,1,1,0,0,0,2,1,0,0,3,1,0,0,0,0,1,1]; //24
    LarryTrevisan24.stats_g3 =        [0,3,0,0,1,3,0,3,0,0,0,0,1,0,0,0,0,1,0]; // 23
    AlessandroCostantini24.stats_g3 = [0,1,0,0,2,0,0,0,0,0,1,0,0,0,0,0,0,1,2]; // 4 
    MatteoMargarit24.stats_g3 =       [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0]; // 22
    MauroCuridori24.stats_g3 =        [0,2,2,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0]; // 2 
    ChristianZanet24.stats_g3 =       [0,1,0,0,0,0,0,0,0,0,1,1,3,0,0,0,0,1,0]; // 9
    GiacomoPiacentini24.stats_g3 =    [0,0,0,0,0,0,0,1,1,2,1,1,0,0,0,0,0,1,-1]; // 20
    GiovanniDalFarra24.stats_g3 =     [0,2,0,0,3,0,0,0,0,0,1,2,2,0,0,0,0,1,0]; // 7
    MiracleObichukwu24.stats_g3 =     [0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0]; // 14
    LucaDellaLonga24.stats_g3 =       [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0]; // 3
    AlessandroRojatti24.stats_g3 =    [0,0,2,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0]; // 12
    MicheleGorasso24.stats_g3 =       [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0]; // 21
    GiacomoFerigo24.stats_g3 =        [0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0]; // 16
    UmbertoNobile24.stats_g3 =        [0,3,1,0,2,0,0,4,3,7,2,1,0,0,0,0,0,1,1]; // 15
    DevinChiarcos24.stats_g3 =        [5,2,1,0,4,1,0,2,0,2,1,1,2,0,0,0,0,1,0]; // 18
    ValentinoCigainero24.stats_g3 =   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0]; //
    MicheleDeAnna24.stats_g3 =        [9,2,2,0,0,5,2,5,1,6,1,1,0,0,0,0,0,1,1]; // 19
    DavideParon24.stats_g3 =          [0,0,1,0,1,0,0,0,2,2,0,0,0,0,0,0,0,1,0]; // 6
    AlessioFurlan24.stats_g3 =        [0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0]; // 10
    MichaelMargarit24.stats_g3 =      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0]; //
    SebastianoTonizzo24.stats_g3 =    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0]; // 5
    //                               | | | | | | | | | | | | | | | | | | | 
    //     gx24_stats =              PTS,|2Px|3Px|FTx|OR,|ASS|ST,|EXP|TD,|Meme
    //     gx24_stats =                |2P,|3P,|FT,|DR,|Rt,|TO,|BL,|DD,|Win|
    //                               | | | | | | | | | | | | | | | | | | | 
    DanieleGanzit24.stats_g3 =        [2,1,1,0,0,0,2,0,1,1,0,0,0,0,0,0,0,1,0]; // 20
    GiacomoSilvestri24.stats_g3 =     [0,0,2,0,2,0,0,0,0,0,0,0,1,0,0,0,0,1,1]; // 9
    VittorioGri24.stats_g3 =          [0,0,0,0,2,0,0,3,0,0,0,3,0,1,0,0,0,1,1]; // 11
    VittorioBasso24.stats_g3 =        [4,2,1,0,2,0,0,1,0,1,0,1,3,0,0,0,0,1,0]; // 8
    AlessandroRizzi24.stats_g3 =      [3,0,2,1,3,0,0,4,0,4,2,1,0,0,0,0,0,1,0]; // 10
    MassimoBaldassi24.stats_g3 =      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0]; // 
    GabrieleMiani24.stats_g3 =        [0,6,2,0,3,3,0,6,3,0,2,1,2,0,0,0,0,1,0]; // 14
    MarcoMarchetti24.stats_g3 =       [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0]; // 
    MarcoLombardo24.stats_g3 =        [6,3,1,0,0,0,0,3,0,3,4,3,0,0,0,0,0,1,1]; // 15
    MicheleVendrame24.stats_g3 =      [0,0,2,0,2,0,0,2,0,2,3,0,0,0,0,0,0,1,0]; // 13
    LorenzoSchinella24.stats_g3 =     [0,0,0,0,1,0,0,2,0,2,1,0,0,0,0,0,0,1,0]; // 3
    GioeleTudini24.stats_g3 =         [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0]; // 7
    FilippoPasquon24.stats_g3 =       [0,3,1,2,4,0,0,1,0,1,0,0,0,0,0,0,0,1,1]; // 2
    TommasoMartello24.stats_g3 =      [0,0,0,0,2,0,0,0,0,0,1,0,0,0,0,0,0,1,0]; // 16
    MarcoRizzi24.stats_g3 =           [0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0]; // 6
    DavidGaspardo24.stats_g3 =        [0,0,0,2,5,0,0,6,1,0,3,2,0,0,0,0,0,1,1]; // 19
    AntonioGri24.stats_g3 =           [2,1,2,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0]; // 5
    RiccardoSchinella24.stats_g3 =    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0]; // 1
    //                               | | | | | | | | | | | | | | | | | | | 
    //     gx24_stats =              PTS,|2Px|3Px|FTx|OR,|ASS|ST,|EXP|TD,|Meme
    //     gx24_stats =                |2P,|3P,|FT,|DR,|Rt,|TO,|BL,|DD,|Win|
    //                               | | | | | | | | | | | | | | | | | | | 
    SimoneMartinelli24.stats_g3 =     [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; // 22
    MatteoSpagnolo24.stats_g3 =       [0,1,2,1,1,0,0,4,0,4,0,0,0,0,0,0,0,0,0]; // 21
    DavideFaurlin24.stats_g3 =        [2,1,2,0,0,0,0,2,1,3,0,0,0,0,0,0,0,0,0]; // 18
    GiovanniTonizzo24.stats_g3 =      [0,0,0,0,2,0,0,1,0,1,1,1,0,0,0,0,0,0,0]; // 5
    AlessandroSant24.stats_g3 =       [0,0,2,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1]; // 7
    MatteoBazzaro24.stats_g3 =        [0,0,2,0,0,0,0,2,0,2,0,1,1,0,0,0,0,0,0]; // 1
    AlessandroSantin24.stats_g3 =     [5,0,2,1,2,2,0,3,1,4,0,0,0,0,0,0,0,0,0]; // 10
    AlessandroGalassi24.stats_g3 =    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; // 19
    PietroSoramel24.stats_g3 =        [2,1,2,0,2,0,0,1,0,1,1,1,1,0,0,0,0,0,0]; // 16
    FilippoAgnoluzzi24.stats_g3 =     [0,0,0,0,0,0,0,1,1,2,0,0,0,0,0,0,0,0,0]; // 2
    EmanueleDaneluzzi24.stats_g3 =    [2,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1]; // 6
    LucaSoramel24.stats_g3 =          [0,2,3,0,1,1,1,0,2,2,0,1,0,0,0,0,0,0,1]; // 12
    PaoloZorzi24.stats_g3 =           [2,1,0,0,0,0,0,0,0,0,0,2,1,0,0,0,0,0,0]; // 9
    ChristianFedrizzi24.stats_g3 =    [0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0]; // 3
    FilippoSappa24.stats_g3 =         [0,2,2,0,5,4,2,2,0,2,5,3,4,0,0,0,0,0,2]; // 15
    GiovanniZanin24.stats_g3 =        [3,0,5,1,0,0,0,2,0,2,0,2,0,0,0,0,0,0,1]; // 23
    EnricoSant24.stats_g3 =           [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3]; // 4
    StefanoPolano24.stats_g3 =        [2,1,0,0,0,0,0,2,1,3,0,0,0,0,0,0,0,0,0]; // 17
    //                                 | | | | | | | | | | | | | | | | | | 
    //     gx24_stats =              PTS,|2Px|3Px|FTx|OR,|ASS|ST,|EXP|TD,|Meme
    //     gx24_stats =                |2P,|3P,|FT,|DR,|Rt,|TO,|BL,|DD,|Win|
    //                               | | | | | | | | | | | | | | | | | | | 
    MarcoPolo24.stats_g3 =            [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1]; // 15
    MarcoSerrao24.stats_g3 =          [4,1,1,0,5,2,2,1,0,1,0,3,1,0,0,0,0,0,1]; // 8
    WilliamIob24.stats_g3 =           [2,1,2,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0]; // 12
    DavideBroggi24.stats_g3 =         [4,1,0,0,1,2,1,0,0,0,0,0,0,0,0,0,0,0,5]; // 3
    AlexMicottis24.stats_g3 =         [0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; // 21
    MassimilianoRossi24.stats_g3 =    [0,0,3,0,0,0,0,2,0,2,0,1,0,0,0,0,0,0,0]; // 22
    MassimoMasotti24.stats_g3 =       [0,0,0,0,0,0,0,2,0,0,0,3,0,0,0,0,0,0,0]; // 10
    EugenioDeTina24.stats_g3 =        [0,0,1,1,1,0,0,0,0,0,0,2,0,0,0,0,0,0,0]; // 9
    LucaAnedda24.stats_g3 =           [0,0,0,0,0,0,0,2,0,2,0,1,2,0,0,0,0,0,1]; // 5
    DenisVanin24.stats_g3 =           [2,1,1,0,0,0,0,1,1,2,0,0,1,0,0,0,0,0,0]; // 17
    ThomasBaracetti24.stats_g3 =      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; // 2
    LucaGemo24.stats_g3 =             [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0]; // 6
    DiegoNata24.stats_g3 =            [0,7,8,0,1,1,1,9,3,0,0,2,0,1,0,0,0,0,1]; // 19 vedaimo se calcola doppia doppia
    MattiaRoiatti24.stats_g3 =        [2,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,2]; // 11
    EdoardoPicogna24.stats_g3 =       [0,0,0,0,2,0,2,1,0,1,0,1,0,0,0,0,0,0,0]; // 7
    MauroPerina24.stats_g3 =          [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; // 18
    LorenzoMoro24.stats_g3 =          [0,0,2,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1]; // 14
    GionaTell24.stats_g3 =            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; // 4
    IacopoPivetta24.stats_g3 =        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]; // 20
    MattiaMasotti24.stats_g3 =        [2,1,2,0,1,0,0,1,1,2,0,1,1,0,0,0,0,0,-1]; // 13
    //                               | | | | | | | | | | | | | | | | | | | 
    //     gx24_stats =              PTS,|2Px|3Px|FTx|OR,|ASS|ST,|EXP|TD,|Meme
    //     gx24_stats =                |2P,|3P,|FT,|DR,|Rt,|TO,|BL,|DD,|Win|

    //     gx24_stats =               [PTS, 2Px,3Px,FTx, OR, ASS,ST,EXP,TD,Meme]
    //     gx24_stats =                  |2P,|3P,|FT,|DR,|Rt,|TO,|BL,|DD,|Win|
    //                                 | | | | | | | | | | | | | | | | | | | 
    MassimilianoMoretti24.stats_semi=   [0,3,2,1,6,1,3,6,1,0,1,4,4,0,0,0,0,1,1]; //13
    AndreaMoretti24.stats_semi =        [0,0,1,0,1,0,0,2,1,3,1,0,0,0,0,0,0,1,1]; //24
    LarryTrevisan24.stats_semi =        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1]; // 23
    AlessandroCostantini24.stats_semi = [0,2,0,1,3,0,0,0,0,0,0,1,1,0,0,0,0,1,4]; // 4 
    MatteoMargarit24.stats_semi =       [0,3,2,0,0,0,2,8,3,0,1,2,0,1,0,0,0,1,2]; // 22
    MauroCuridori24.stats_semi =        [2,1,2,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1]; // 2 
    ChristianZanet24.stats_semi =       [2,1,0,0,0,0,0,0,0,0,0,2,1,0,0,0,0,1,1]; // 9
    GiacomoPiacentini24.stats_semi =    [0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1]; // 20
    GiovanniDalFarra24.stats_semi =     [0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1]; // 7
    MiracleObichukwu24.stats_semi =     [0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1]; // 14
    LucaDellaLonga24.stats_semi =       [0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1]; // 3
    //     gx24_stats =                PTS,|2Px|3Px|FTx|OR,|ASS|ST,|EXP|TD,|Meme
    //     gx24_stats =                  |2P,|3P,|FT,|DR,|Rt,|TO,|BL,|DD,|Win|
    AlessandroRojatti24.stats_semi =    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1]; // 12
    MicheleGorasso24.stats_semi =       [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1]; // 21
    GiacomoFerigo24.stats_semi =        [0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,1,1]; // 16
    UmbertoNobile24.stats_semi =        [0,3,3,0,2,3,0,6,1,0,1,0,0,0,0,0,0,1,2]; // 15
    DevinChiarcos24.stats_semi =        [0,0,1,1,1,0,0,3,0,3,1,0,1,1,0,0,0,1,1]; // 18
    ValentinoCigainero24.stats_semi =   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,4]; //
    MicheleDeAnna24.stats_semi =        [2,1,1,0,0,0,2,2,0,2,0,0,1,0,0,0,0,1,1]; //
    DavideParon24.stats_semi =          [0,0,1,0,1,0,0,1,0,1,0,2,0,0,0,0,0,1,1]; // 6
    AlessioFurlan24.stats_semi =        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1]; // 10
    MichaelMargarit24.stats_semi =      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1]; //
    SebastianoTonizzo24.stats_semi =    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1]; // 5
    //                                 | | | | | | | | | | | | | | | | | | | 
    //     gx24_stats =                PTS,|2Px|3Px|FTx|OR,|ASS|ST,|EXP|TD,|Meme
    //     gx24_stats =                  |2P,|3P,|FT,|DR,|Rt,|TO,|BL,|DD,|Win|
    //                                 | | | | | | | | | | | | | | | | | | | 
    DanieleGanzit24.stats_semi =        [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,3]; // 
    GiacomoSilvestri24.stats_semi =     [0,0,1,0,1,0,0,1,0,1,0,2,0,0,0,0,0,1,3]; // 9
    VittorioGri24.stats_semi =          [0,0,2,0,1,0,0,2,0,2,1,0,0,2,0,0,0,1,3]; // 11
    VittorioBasso24.stats_semi =        [0,4,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,3]; // 8
    AlessandroRizzi24.stats_semi =      [0,3,2,0,1,0,0,2,1,3,1,0,2,0,0,0,0,1,3]; // 10
    MassimoBaldassi24.stats_semi =      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2]; // 
    GabrieleMiani24.stats_semi =        [0,4,0,0,4,3,0,10,0,0,4,2,0,0,0,1,0,1,3]; // 14
    MarcoMarchetti24.stats_semi =       [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2]; // 
    MarcoLombardo24.stats_semi =        [0,2,2,0,0,1,3,1,2,3,1,0,1,0,0,0,0,1,4]; // 15
    //     gx24_stats =                PTS,|2Px|3Px|FTx|OR,|ASS|ST,|EXP|TD,|Meme
    //     gx24_stats =                  |2P,|3P,|FT,|DR,|Rt,|TO,|BL,|DD,|Win|
    MicheleVendrame24.stats_semi =      [0,0,5,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,2]; // 13
    LorenzoSchinella24.stats_semi =     [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2]; // 3
    GioeleTudini24.stats_semi =         [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2]; // 7
    FilippoPasquon24.stats_semi =       [0,0,1,0,0,0,0,1,1,2,2,0,2,0,0,0,0,1,2]; // 2
    TommasoMartello24.stats_semi =      [0,0,0,0,1,3,1,0,0,0,0,2,1,0,0,0,0,1,2]; // 16
    MarcoRizzi24.stats_semi =           [0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,2]; // 6
    DavidGaspardo24.stats_semi =        [0,2,0,3,5,3,1,5,0,5,1,1,0,0,0,0,0,1,2]; // 19
    AntonioGri24.stats_semi =           [0,1,0,0,2,1,1,0,0,0,0,1,0,0,0,0,0,1,2]; // 5
    RiccardoSchinella24.stats_semi =    [0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,1,3]; // 1
    //                                 | | | | | | | | | | | | | | | | | | | 
    //     gx24_stats =                PTS,|2Px|3Px|FTx|OR,|ASS|ST,|EXP|TD,|Meme
    //     gx24_stats =                  |2P,|3P,|FT,|DR,|Rt,|TO,|BL,|DD,|Win|
    //                                 | | | | | | | | | | | | | | | | | | | 
    SimoneMartinelli24.stats_semi =     [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2]; // 22
    MatteoSpagnolo24.stats_semi =       [0,1,2,0,2,0,0,2,0,2,0,1,1,0,0,0,0,0,2]; // 21
    DavideFaurlin24.stats_semi =        [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2]; // 18
    GiovanniTonizzo24.stats_semi =      [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,2]; // 5
    AlessandroSant24.stats_semi =       [0,1,3,1,5,0,0,3,0,3,0,0,2,0,0,0,0,0,2]; // 7
    MatteoBazzaro24.stats_semi =        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2]; // 1
    AlessandroSantin24.stats_semi =     [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2]; // 10
    AlessandroGalassi24.stats_semi =    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2]; // 19
    PietroSoramel24.stats_semi =        [0,4,4,1,6,1,3,2,1,3,1,1,2,0,0,0,0,0,-1]; // 16
    //     gx24_stats =                PTS,|2Px|3Px|FTx|OR,|ASS|ST,|EXP|TD,|Meme
    //     gx24_stats =                  |2P,|3P,|FT,|DR,|Rt,|TO,|BL,|DD,|Win|
    FilippoAgnoluzzi24.stats_semi =     [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2]; // 2
    EmanueleDaneluzzi24.stats_semi =    [0,1,1,0,0,0,0,1,2,3,1,1,1,0,0,0,0,0,2]; // 6
    LucaSoramel24.stats_semi =          [0,0,4,1,0,0,2,1,2,3,2,2,1,0,0,0,0,0,3]; // 12
    PaoloZorzi24.stats_semi =           [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2]; // 9
    ChristianFedrizzi24.stats_semi =    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2]; // 3
    FilippoSappa24.stats_semi =         [0,2,2,0,1,2,4,2,0,2,2,0,1,0,0,0,0,0,3]; // 15
    GiovanniZanin24.stats_semi =        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2]; // 23
    EnricoSant24.stats_semi =           [0,0,1,2,2,0,0,4,0,4,1,3,1,0,0,0,0,0,5]; // 4
    StefanoPolano24.stats_semi =        [0,0,2,0,0,0,0,2,0,2,0,1,0,0,0,0,0,0,2]; // 17
    //                                   | | | | | | | | | | | | | | | | | | 
    //     gx24_stats =                PTS,|2Px|3Px|FTx|OR,|ASS|ST,|EXP|TD,|Meme
    //     gx24_stats =                  |2P,|3P,|FT,|DR,|Rt,|TO,|BL,|DD,|Win|
    //                                  | | | | | | | | | | | | | | | | | | | 
    MarcoPolo24.stats_semi =            [0,0,0,0,0,0,0,2,0,2,1,0,0,0,0,0,0,0,2]; // 15
    MarcoSerrao24.stats_semi =          [0,1,5,2,4,4,3,5,0,5,0,0,0,0,0,0,0,0,2]; // 8
    WilliamIob24.stats_semi =           [1,0,2,0,0,1,1,4,0,4,0,1,1,0,0,0,0,0,2]; // 12
    DavideBroggi24.stats_semi =         [0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,2]; // 3
    AlexMicottis24.stats_semi =         [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3]; // 21
    MassimilianoRossi24.stats_semi =    [0,3,0,0,1,0,0,5,0,0,0,3,0,0,0,0,0,0,2]; // 22
    MassimoMasotti24.stats_semi =       [0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,3]; // 10
    EugenioDeTina24.stats_semi =        [0,0,0,0,2,0,0,0,0,0,0,1,1,0,0,0,0,0,2]; // 9
    LucaAnedda24.stats_semi =           [0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,3]; // 5
    DenisVanin24.stats_semi =           [0,0,2,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,2]; // 17
    //     gx24_stats =                PTS,|2Px|3Px|FTx|OR,|ASS|ST,|EXP|TD,|Meme
    //     gx24_stats =                  |2P,|3P,|FT,|DR,|Rt,|TO,|BL,|DD,|Win|
    ThomasBaracetti24.stats_semi =      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2]; // 2
    LucaGemo24.stats_semi =             [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2]; // 6
    DiegoNata24.stats_semi =            [0,0,6,0,1,0,0,4,5,0,1,2,0,0,0,0,0,0,6]; // 19
    MattiaRoiatti24.stats_semi =        [3,0,0,1,1,0,0,2,0,2,0,0,0,0,0,0,0,0,3]; // 11
    EdoardoPicogna24.stats_semi =       [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2]; // 7
    MauroPerina24.stats_semi =          [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2]; // 18
    LorenzoMoro24.stats_semi =          [0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,2]; // 14
    GionaTell24.stats_semi =            [0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,2]; // 4
    IacopoPivetta24.stats_semi =        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2]; // 20
    MattiaMasotti24.stats_semi =        [0,3,2,1,1,1,4,2,1,3,1,4,3,1,0,0,0,0,2]; // 13
    //                                 | | | | | | | | | | | | | | | | | | | 
    //     gx24_stats =                PTS,|2Px|3Px|FTx|OR,|ASS|ST,|EXP|TD,|Meme
    //     gx24_stats =                  |2P,|3P,|FT,|DR,|Rt,|TO,|BL,|DD,|Win|

   
//qui si potrebbe fare uno script che prende il copia da excel (FG800) e fa gli array, anche chatGPT lo fa da solo
    MassimilianoMoretti24.stats_td3 = [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0];
    AndreaMoretti24.stats_td3 = [1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0];
    LarryTrevisan24.stats_td3 = [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    AlessandroCostantini24.stats_td3 = [1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    MatteoMargarit24.stats_td3 = [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    MauroCuridori24.stats_td3 = [1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0];
    ChristianZanet24.stats_td3 = [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    GiacomoPiacentini24.stats_td3 = [1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0];
    GiovanniDalFarra24.stats_td3 = [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    MiracleObichukwu24.stats_td3 = [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    LucaDellaLonga24.stats_td3 = [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    AlessandroRojatti24.stats_td3 = [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    MicheleGorasso24.stats_td3 = [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    GiacomoFerigo24.stats_td3 = [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    UmbertoNobile24.stats_td3 = [1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0];
    DevinChiarcos24.stats_td3 = [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0];
    ValentinoCigainero24.stats_td3 = [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    MicheleDeAnna24.stats_td3 = [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    DavideParon24.stats_td3 = [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0];
    AlessioFurlan24.stats_td3 = [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    MichaelMargarit24.stats_td3 = [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    SebastianoTonizzo24.stats_td3 = [1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0];
    DanieleGanzit24.stats_td3 = [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    GiacomoSilvestri24.stats_td3 = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0];
    VittorioGri24.stats_td3 = [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0];
    VittorioBasso24.stats_td3 = [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    AlessandroRizzi24.stats_td3 = [1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0];
    MassimoBaldassi24.stats_td3 = [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    GabrieleMiani24.stats_td3 = [1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 3];
    MarcoMarchetti24.stats_td3 = [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    MarcoLombardo24.stats_td3 = [1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 5];
    MicheleVendrame24.stats_td3 = [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    LorenzoSchinella24.stats_td3 = [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    GioeleTudini24.stats_td3 = [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    FilippoPasquon24.stats_td3 = [1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0];
    TommasoMartello24.stats_td3 = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0];
    MarcoRizzi24.stats_td3 = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    DavidGaspardo24.stats_td3 = [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    AntonioGri24.stats_td3 = [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    RiccardoSchinella24.stats_td3 = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0];
    SimoneMartinelli24.stats_td3 = [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    MatteoSpagnolo24.stats_td3 = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0];
    DavideFaurlin24.stats_td3 = [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    GiovanniTonizzo24.stats_td3 = [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];
    AlessandroSant24.stats_td3 = [1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0];
    MatteoBazzaro24.stats_td3 = [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    AlessandroSantin24.stats_td3 = [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0];
    AlessandroGalassi24.stats_td3 = [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    PietroSoramel24.stats_td3 = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0];
    FilippoAgnoluzzi24.stats_td3 = [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    EmanueleDaneluzzi24.stats_td3 = [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    LucaSoramel24.stats_td3 = [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    PaoloZorzi24.stats_td3 = [1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0];
    ChristianFedrizzi24.stats_td3 = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0];
    FilippoSappa24.stats_td3 = [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    GiovanniZanin24.stats_td3 = [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    EnricoSant24.stats_td3 = [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    StefanoPolano24.stats_td3 = [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0];
    MarcoPolo24.stats_td3 = [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    MarcoSerrao24.stats_td3 = [1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0];
    WilliamIob24.stats_td3 = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0];
    DavideBroggi24.stats_td3 = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    AlexMicottis24.stats_td3 = [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    MassimilianoRossi24.stats_td3 = [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    MassimoMasotti24.stats_td3 = [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0];
    EugenioDeTina24.stats_td3 = [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    LucaAnedda24.stats_td3 = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    DenisVanin24.stats_td3 = [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    ThomasBaracetti24.stats_td3 = [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    LucaGemo24.stats_td3 = [1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    DiegoNata24.stats_td3 = [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    MattiaRoiatti24.stats_td3 = [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0];
    EdoardoPicogna24.stats_td3 = [1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0];
    MauroPerina24.stats_td3 = [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    LorenzoMoro24.stats_td3 = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0];
    GionaTell24.stats_td3 = [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    IacopoPivetta24.stats_td3 = [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    MattiaMasotti24.stats_td3 = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    




//fatti da script pulisci_class_esistente.py che finisce in init_fantateam_js:
MassimilianoMoretti24.stats_final = [12, 4, 5, 1, 6, 1, 4, 3, 3, 6, 3, 1, 2, 0, 0, 0, 0, 1, 1];
AndreaMoretti24.stats_final = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0];
LarryTrevisan24.stats_final = [23, 7, 5, 3, 1, 0, 0, 2, 1, 3, 1, 1, 2, 3, 0, 0, 0, 1, 0];
AlessandroCostantini24.stats_final = [3, 0, 5, 1, 4, 0, 0, 2, 0, 2, 0, 0, 1, 0, 0, 0, 0, 1, 0];
MatteoMargarit24.stats_final = [12, 5, 3, 0, 0, 2, 0, 5, 3, 8, 0, 2, 0, 0, 0, 0, 0, 1, 0];
MauroCuridori24.stats_final = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0];
ChristianZanet24.stats_final = [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0];
GiacomoPiacentini24.stats_final = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1];
GiovanniDalFarra24.stats_final = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0];
MiracleObichukwu24.stats_final = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0];
LucaDellaLonga24.stats_final = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0];
AlessandroRojatti24.stats_final = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0];
MicheleGorasso24.stats_final = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0];
GiacomoFerigo24.stats_final = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0];
UmbertoNobile24.stats_final = [11, 4, 4, 0, 1, 3, 1, 6, 1, 7, 2, 0, 2, 0, 0, 0, 0, 1, -3];
DevinChiarcos24.stats_final = [4, 2, 2, 0, 1, 0, 0, 0, 4, 4, 1, 0, 1, 0, 0, 0, 0, 1, 0];
ValentinoCigainero24.stats_final = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0];
MicheleDeAnna24.stats_final = [5, 2, 3, 0, 1, 1, 1, 1, 3, 4, 1, 2, 0, 1, 0, 0, 0, 1, 0];
DavideParon24.stats_final = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0];
AlessioFurlan24.stats_final = [2, 1, 1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0];
MichaelMargarit24.stats_final = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0];
SebastianoTonizzo24.stats_final = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0];
DanieleGanzit24.stats_final = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
GiacomoSilvestri24.stats_final = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0];
VittorioGri24.stats_final = [2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0];
VittorioBasso24.stats_final = [5, 1, 1, 1, 2, 0, 0, 5, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0];
AlessandroRizzi24.stats_final = [8, 4, 4, 0, 3, 0, 1, 1, 0, 1, 3, 2, 0, 1, 0, 0, 0, 0, 0];
MassimoBaldassi24.stats_final = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
GabrieleMiani24.stats_final = [31, 5, 4, 4, 2, 9, 1, 9, 4, 13, 2, 1, 0, 0, 0, 1, 0, 0, 0];
MarcoMarchetti24.stats_final = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
MarcoLombardo24.stats_final = [10, 3, 5, 0, 0, 4, 1, 2, 2, 4, 0, 1, 0, 0, 0, 0, 0, 0, 0];
MicheleVendrame24.stats_final = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
LorenzoSchinella24.stats_final = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
GioeleTudini24.stats_final = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
FilippoPasquon24.stats_final = [0, 0, 1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
TommasoMartello24.stats_final = [5, 0, 1, 1, 0, 2, 4, 1, 1, 2, 0, 3, 0, 0, 0, 0, 0, 0, 0];
MarcoRizzi24.stats_final = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
DavidGaspardo24.stats_final = [8, 2, 6, 1, 5, 1, 0, 6, 0, 6, 1, 5, 0, 0, 0, 0, 0, 0, 0];
AntonioGri24.stats_final = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
RiccardoSchinella24.stats_final = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];






    // GIORNATA 3
 


    const players24 = [MassimilianoMoretti24, AndreaMoretti24, LarryTrevisan24, AlessandroCostantini24, MatteoMargarit24, 
        MauroCuridori24, ChristianZanet24, GiacomoPiacentini24, GiovanniDalFarra24, MiracleObichukwu24, LucaDellaLonga24, 
        AlessandroRojatti24, MicheleGorasso24, GiacomoFerigo24, UmbertoNobile24, DevinChiarcos24, ValentinoCigainero24, 
        MicheleDeAnna24, DavideParon24, AlessioFurlan24, MichaelMargarit24, SebastianoTonizzo24, 

        DanieleGanzit24, GiacomoSilvestri24, VittorioGri24, VittorioBasso24, AlessandroRizzi24, MassimoBaldassi24, 
        GabrieleMiani24, MarcoMarchetti24, MarcoLombardo24, MicheleVendrame24, LorenzoSchinella24, GioeleTudini24, 
        FilippoPasquon24, TommasoMartello24, MarcoRizzi24, DavidGaspardo24, AntonioGri24, RiccardoSchinella24,

        SimoneMartinelli24, MatteoSpagnolo24, DavideFaurlin24, GiovanniTonizzo24, AlessandroSant24, MatteoBazzaro24, 
        AlessandroSantin24, AlessandroGalassi24, PietroSoramel24, FilippoAgnoluzzi24, EmanueleDaneluzzi24, LucaSoramel24, 
        PaoloZorzi24, ChristianFedrizzi24, FilippoSappa24, GiovanniZanin24, EnricoSant24, StefanoPolano24,

        MarcoPolo24, MarcoSerrao24, WilliamIob24, DavideBroggi24, AlexMicottis24, MassimilianoRossi24, MassimoMasotti24, 
        EugenioDeTina24, LucaAnedda24, DenisVanin24, ThomasBaracetti24, LucaGemo24, DiegoNata24, MattiaRoiatti24, 
        EdoardoPicogna24, MauroPerina24, LorenzoMoro24, GionaTell24, IacopoPivetta24, MattiaMasotti24 ];


        // Funzione per calcolare il prodotto scalare
    function sumProduct(array1, array2) {
        return array1.reduce((sum, a, i) => sum + a * array2[i], 0);
    }



    //                   0    1   2   3    4   5   6    7   8    9     10  11  12  13  14   15  16  17   18
    // gx_stats =      [PTS, 2P, 2Px, 3P, 3Px, FT, FTx, DR, OR, Rtot, ASS, TO, ST, BL, EXP, DD, TD, Win, Meme]
    const pdkWeights = [1, 0, -0.75, 0.5, -0.75, 0, -0.5, 1, 1.25,  0, 1.5, -1, 1.5, 1.5, -3,  3,  6,   2,  1];

    //                   0    1       2        3       4       5       6     7    8    9    10     11     12
    // td3_stats=    [part, nopart, passa1, passa2, passa3, passa4, finale, 3rd, 2nd, 1st, 0su10, ciab, altri meme]
    const td3Weights = [1,   -5,      1,       1,      2,      2,     3,      5,   10, 20,  -2,    1  ,    1     ];
    // Calcola g1 per ogni giocatore
    for (let player of players24) { //da copiare questo for ogni anno con l' anno giusto
        // Calcola PTS (player.stats_g1[0])
        player.stats_g1[0] = player.stats_g1[1] * 2 + player.stats_g1[3] * 3 + player.stats_g1[5];
        
        // Calcola Rtot (player.stats_g1[9])
        player.stats_g1[9] = player.stats_g1[7] + player.stats_g1[8];
    
        // Calcolo DD e TD
        const valuesToCheck = [player.stats_g1[0], player.stats_g1[9], player.stats_g1[10], player.stats_g1[12], player.stats_g1[13]];
        const countGreaterThanNine = valuesToCheck.filter(value => value > 9).length;
        
        // Imposta player.stats_g1[15] e player.stats_g1[16]
        player.stats_g1[15] = countGreaterThanNine >= 2 ? 1 : 0;
        player.stats_g1[16] = countGreaterThanNine >= 3 ? 1 : 0;
    
        // Calcola g1 utilizzando sumProduct
        player.g1 = sumProduct(player.stats_g1, pdkWeights);
    
        // Ripeti per g2, g3, semi, final
        // Per semplicità, i calcoli di PTS e Rtot sono gli stessi, solo cambiando l'array di riferimento (player.stats_g2, player.stats_g3, ecc.)
        //da scommentare altre giornate
        player.stats_g2[0] = player.stats_g2[1] * 2 + player.stats_g2[3] * 3 + player.stats_g2[5];
        player.stats_g2[9] = player.stats_g2[7] + player.stats_g2[8];
        const valuesToCheckG2 = [player.stats_g2[0], player.stats_g2[9], player.stats_g2[10], player.stats_g2[12], player.stats_g2[13]];
        const countGreaterThanNineG2 = valuesToCheckG2.filter(value => value > 9).length;
        player.stats_g2[15] = countGreaterThanNineG2 >= 2 ? 1 : 0;
        player.stats_g2[16] = countGreaterThanNineG2 >= 3 ? 1 : 0;
        player.g2 = sumProduct(player.stats_g2, pdkWeights);
    
        player.stats_g3[0] = player.stats_g3[1] * 2 + player.stats_g3[3] * 3 + player.stats_g3[5];
        player.stats_g3[9] = player.stats_g3[7] + player.stats_g3[8];
        const valuesToCheckG3 = [player.stats_g3[0], player.stats_g3[9], player.stats_g3[10], player.stats_g3[12], player.stats_g3[13]];
        const countGreaterThanNineG3 = valuesToCheckG3.filter(value => value > 9).length;
        player.stats_g3[15] = countGreaterThanNineG3 >= 2 ? 1 : 0;
        player.stats_g3[16] = countGreaterThanNineG3 >= 3 ? 1 : 0;
        player.g3 = sumProduct(player.stats_g3, pdkWeights);
    
        player.stats_semi[0] = player.stats_semi[1] * 2 + player.stats_semi[3] * 3 + player.stats_semi[5];
        player.stats_semi[9] = player.stats_semi[7] + player.stats_semi[8];
        const valuesToCheckSemi = [player.stats_semi[0], player.stats_semi[9], player.stats_semi[10], player.stats_semi[12], player.stats_semi[13]];
        const countGreaterThanNineSemi = valuesToCheckSemi.filter(value => value > 9).length;
        player.stats_semi[15] = countGreaterThanNineSemi >= 2 ? 1 : 0;
        player.stats_semi[16] = countGreaterThanNineSemi >= 3 ? 1 : 0;
        player.semi = sumProduct(player.stats_semi, pdkWeights);
    
        player.td3 = sumProduct(player.stats_td3, td3Weights);

        player.stats_final[0] = player.stats_final[1] * 2 + player.stats_final[3] * 3 + player.stats_final[5];
        player.stats_final[9] = player.stats_final[7] + player.stats_final[8];
        const valuesToCheckFinal = [player.stats_final[0], player.stats_final[9], player.stats_final[10], player.stats_final[12], player.stats_final[13]];
        const countGreaterThanNineFinal = valuesToCheckFinal.filter(value => value > 9).length;
        player.stats_final[15] = countGreaterThanNineFinal >= 2 ? 1 : 0;
        player.stats_final[16] = countGreaterThanNineFinal >= 3 ? 1 : 0;
        player.final = sumProduct(player.stats_final, pdkWeights);

    }


// Calcola le statistiche medie

    //FINALE punteggi medi calcolati con excel e messi dentro a mano
SimoneMartinelli24.final = Math.round(-0.88 * 100) / 100;
MatteoSpagnolo24.final = Math.round(6.38 * 100) / 100;
DavideFaurlin24.final = Math.round(0.38 * 100) / 100;
GiovanniTonizzo24.final = Math.round(0.50 * 100) / 100;
AlessandroSant24.final = Math.round(3.94 * 100) / 100;
MatteoBazzaro24.final = Math.round(0.56 * 100) / 100;
AlessandroSantin24.final = Math.round(1.50 * 100) / 100;
AlessandroGalassi24.final = Math.round(0.63 * 100) / 100;
PietroSoramel24.final = Math.round(9.19 * 100) / 100;
FilippoAgnoluzzi24.final = Math.round(1.38 * 100) / 100;
EmanueleDaneluzzi24.final = Math.round(3.69 * 100) / 100;
LucaSoramel24.final = Math.round(4.44 * 100) / 100;
PaoloZorzi24.final = Math.round(2.13 * 100) / 100;
ChristianFedrizzi24.final = Math.round(0.94 * 100) / 100;
FilippoSappa24.final = Math.round(20.13 * 100) / 100;
GiovanniZanin24.final = Math.round(6.31 * 100) / 100;
EnricoSant24.final = Math.round(4.19 * 100) / 100;
StefanoPolano24.final = Math.round(2.08 * 100) / 100;
MarcoPolo24.final = Math.round(2.44 * 100) / 100;
MarcoSerrao24.final = Math.round(13.88 * 100) / 100;
WilliamIob24.final = Math.round(6.44 * 100) / 100;
DavideBroggi24.final = Math.round(3.38 * 100) / 100;
AlexMicottis24.final = Math.round(2.31 * 100) / 100;
MassimilianoRossi24.final = Math.round(6.75 * 100) / 100;
MassimoMasotti24.final = Math.round(1.19 * 100) / 100;
EugenioDeTina24.final = Math.round(1.94 * 100) / 100;
LucaAnedda24.final = Math.round(4.00 * 100) / 100;
DenisVanin24.final = Math.round(3.63 * 100) / 100;
ThomasBaracetti24.final = Math.round(1.75 * 100) / 100;
LucaGemo24.final = Math.round(1.38 * 100) / 100;
DiegoNata24.final = Math.round(22.00 * 100) / 100;
MattiaRoiatti24.final = Math.round(4.13 * 100) / 100;
EdoardoPicogna24.final = Math.round(0.75 * 100) / 100;
MauroPerina24.final = Math.round(2.00 * 100) / 100;
LorenzoMoro24.final = Math.round(2.44 * 100) / 100;
GionaTell24.final = Math.round(1.50 * 100) / 100;
IacopoPivetta24.final = Math.round(1.31 * 100) / 100;
MattiaMasotti24.final = Math.round(8.75 * 100) / 100;

    // Ciclo for per calcolare player.tot per ogni giocatore
    for (let i = 0; i < players24.length; i++) {
        let player = players24[i];
        player.tot = Math.round((player.g1 + player.g2 + player.g3 + player.semi + player.td3 + player.final)*100)/100;
    };
    //
    function createFantateam(teamIndex, teamName, rione, players24) {
        const fantateam = {
            ...fantateam_type,
            team_index: teamIndex,
            name: teamName,
            rione: { ...rione },
            p1: { ...players24[0] },
            p2: { ...players24[1] },
            p3: { ...players24[2] },
            p4: { ...players24[3] },
            p5: { ...players24[4] },
        };
        
        fantateam.total_cost = fantateam.p1.cost + fantateam.p2.cost + fantateam.p3.cost + fantateam.p4.cost + fantateam.p5.cost;
        fantateam.tot_g1 = fantateam.p1.g1 + fantateam.p2.g1 + fantateam.p3.g1 + fantateam.p4.g1 + fantateam.p5.g1;
        fantateam.tot_g2 = fantateam.p1.g2 + fantateam.p2.g2 + fantateam.p3.g2 + fantateam.p4.g2 + fantateam.p5.g2;
        fantateam.tot_g3 = fantateam.p1.g3 + fantateam.p2.g3 + fantateam.p3.g3 + fantateam.p4.g3 + fantateam.p5.g3;
        fantateam.tot_semi = fantateam.p1.semi + fantateam.p2.semi + fantateam.p3.semi + fantateam.p4.semi + fantateam.p5.semi;
        fantateam.tot_td3 = fantateam.p1.td3 + fantateam.p2.td3 + fantateam.p3.td3 + fantateam.p4.td3 + fantateam.p5.td3;
        fantateam.tot_final = fantateam.p1.final + fantateam.p2.final + fantateam.p3.final + fantateam.p4.final + fantateam.p5.final;
        fantateam.tot_team = fantateam.p1.tot + fantateam.p2.tot + fantateam.p3.tot + fantateam.p4.tot + fantateam.p5.tot + fantateam.rione.final_points;
    
        return fantateam;
    }
//fatti da script pulisci_class_esistente.py che finisce in init_fantateam_js
const ft1 = createFantateam(1, "Burritos Picantes", EST, [EdoardoPicogna24, WilliamIob24, FilippoSappa24, UmbertoNobile24, MatteoSpagnolo24]);
const ft2 = createFantateam(2, "Nord", NORD, [AlessandroRizzi24, DevinChiarcos24, UmbertoNobile24, GiacomoFerigo24, AlessandroSant24]);
const ft3 = createFantateam(3, "Festainvigna", WEST, [FilippoAgnoluzzi24, UmbertoNobile24, MatteoSpagnolo24, MassimilianoMoretti24, PaoloZorzi24]);
const ft4 = createFantateam(4, "Pangri", EST, [MarcoRizzi24, AlessioFurlan24, UmbertoNobile24, MassimilianoMoretti24, MarcoPolo24]);
const ft5 = createFantateam(5, "Zoo_Rehab", WEST, [DavidGaspardo24, UmbertoNobile24, DevinChiarcos24, GiacomoPiacentini24, FilippoPasquon24]);
const ft6 = createFantateam(6, "Nordes (vincitore)", NORD, [DiegoNata24, FilippoPasquon24, UmbertoNobile24, LucaAnedda24, DevinChiarcos24]);
const ft7 = createFantateam(7, "Estateam", EST, [SimoneMartinelli24, UmbertoNobile24, MattiaMasotti24, FilippoSappa24, FilippoPasquon24]);
const ft8 = createFantateam(8, "stirati", NORD, [UmbertoNobile24, AlessandroSant24, FilippoPasquon24, MiracleObichukwu24, LarryTrevisan24]);
const ft9 = createFantateam(9, "emosbobna", NORD, [DevinChiarcos24, MarcoLombardo24, GiovanniZanin24, MattiaRoiatti24, PietroSoramel24]);
const ft10 = createFantateam(10, "Gabro's top team", WEST, [UmbertoNobile24, AlessandroCostantini24, MarcoSerrao24, MiracleObichukwu24, EnricoSant24]);
const ft11 = createFantateam(11, "oilapledecoval", NORD, [AlessandroSantin24, MarcoMarchetti24, DavidGaspardo24, UmbertoNobile24, PietroSoramel24]);
const ft12 = createFantateam(12, "Armata Rossa", NORD, [MarcoRizzi24, MassimilianoMoretti24, UmbertoNobile24, MassimilianoRossi24, LucaAnedda24]);
const ft13 = createFantateam(13, "La Betty", WEST, [EmanueleDaneluzzi24, MassimilianoMoretti24, PietroSoramel24, EdoardoPicogna24, MiracleObichukwu24]);
const ft14 = createFantateam(14, "Estinti", WEST, [UmbertoNobile24, AlessandroCostantini24, AlessandroSant24, MauroPerina24, MarcoMarchetti24]);
const ft15 = createFantateam(15, "C&C", SUD, [FilippoSappa24, LorenzoMoro24, PietroSoramel24, EnricoSant24, DanieleGanzit24]);
const ft16 = createFantateam(16, "🦀", WEST, [PietroSoramel24, MassimilianoMoretti24, AlessioFurlan24, LucaSoramel24, MarcoRizzi24]);
const ft17 = createFantateam(17, "Melinda", NORD, [PietroSoramel24, LucaSoramel24, MassimilianoMoretti24, AlessioFurlan24, AndreaMoretti24]);
const ft18 = createFantateam(18, "Winxclub", EST, [AlessioFurlan24, MassimilianoMoretti24, LucaSoramel24, PietroSoramel24, LucaAnedda24]);
const ft19 = createFantateam(19, "tnerb", SUD, [MassimilianoMoretti24, GiovanniTonizzo24, PietroSoramel24, MarcoPolo24, MatteoSpagnolo24]);
const ft20 = createFantateam(20, "Prime time players", WEST, [LarryTrevisan24, MarcoSerrao24, UmbertoNobile24, FilippoPasquon24, LorenzoMoro24]);
const ft21 = createFantateam(21, "Golden Cod Cepe’s Warriors", SUD, [AntonioGri24, GiovanniZanin24, MiracleObichukwu24, FilippoSappa24, GiovanniTonizzo24]);
const ft22 = createFantateam(22, "sustovich", WEST, [MiracleObichukwu24, MassimilianoMoretti24, LucaSoramel24, AndreaMoretti24, PietroSoramel24]);
const ft23 = createFantateam(23, "Groviscrazia", WEST, [PietroSoramel24, LucaSoramel24, MiracleObichukwu24, MicheleVendrame24, MassimilianoMoretti24]);
const ft24 = createFantateam(24, "DEVIN", WEST, [MassimilianoMoretti24, GiacomoPiacentini24, DevinChiarcos24, VittorioBasso24, FilippoPasquon24]);
const ft25 = createFantateam(25, "Mia", WEST, [DavideParon24, MassimilianoMoretti24, DevinChiarcos24, MattiaMasotti24, FilippoPasquon24]);
const ft26 = createFantateam(26, "Goggo Bello", WEST, [AlessandroSant24, MiracleObichukwu24, UmbertoNobile24, TommasoMartello24, GionaTell24]);
const ft27 = createFantateam(27, "Rione Muscletto", NORD, [GioeleTudini24, FilippoSappa24, LarryTrevisan24, AlessandroSant24, AlessandroRojatti24]);
const ft28 = createFantateam(28, "Oklahoma city tinder", WEST, [DevinChiarcos24, MattiaRoiatti24, MattiaMasotti24, FilippoPasquon24, MassimilianoMoretti24]);
const ft29 = createFantateam(29, "Mau", WEST, [EnricoSant24, MauroCuridori24, GiacomoSilvestri24, FilippoSappa24, AlessandroRizzi24]);
const ft30 = createFantateam(30, "SuperOne", WEST, [AndreaMoretti24, MicheleDeAnna24, MassimilianoMoretti24, MiracleObichukwu24, MicheleGorasso24]);
const ft31 = createFantateam(31, "Liam", NORD, [MattiaMasotti24, MassimilianoMoretti24, EnricoSant24, MassimoMasotti24, DevinChiarcos24]);
const ft32 = createFantateam(32, "Flacko the sheriff", WEST, [MicheleVendrame24, MassimilianoMoretti24, MattiaRoiatti24, PietroSoramel24, ValentinoCigainero24]);
const ft33 = createFantateam(33, "Ghetto boys", NORD, [MiracleObichukwu24, LarryTrevisan24, GiovanniTonizzo24, PietroSoramel24, DiegoNata24]);
const ft34 = createFantateam(34, "GIOGIZ", WEST, [GiacomoPiacentini24, GiacomoFerigo24, DevinChiarcos24, DavidGaspardo24, FilippoAgnoluzzi24]);
const ft35 = createFantateam(35, "After CapOstile", WEST, [SebastianoTonizzo24, MassimilianoMoretti24, LarryTrevisan24, MiracleObichukwu24, VittorioGri24]);
const ft36 = createFantateam(36, "Ringhio", WEST, [LucaSoramel24, MassimilianoMoretti24, LarryTrevisan24, AlessandroRojatti24, GiacomoFerigo24]);
const ft37 = createFantateam(37, "Matte", WEST, [GiacomoSilvestri24, MarcoSerrao24, LucaGemo24, FilippoSappa24, LarryTrevisan24]);
const ft38 = createFantateam(38, "Unavoltaerofortealchiosco!", WEST, [UmbertoNobile24, MarcoSerrao24, AlessandroRizzi24, GiacomoPiacentini24, MassimilianoRossi24]);
const ft39 = createFantateam(39, "Samu Masotti", EST, [DevinChiarcos24, AlessandroCostantini24, VittorioBasso24, FilippoPasquon24, DavideBroggi24]);
const ft40 = createFantateam(40, "Machico", NORD, [AndreaMoretti24, MassimilianoMoretti24, GiovanniTonizzo24, LucaAnedda24, PietroSoramel24]);
const ft41 = createFantateam(41, "Alto Moro", SUD, [ChristianZanet24, MicheleDeAnna24, UmbertoNobile24, FilippoPasquon24, MattiaMasotti24]);
const ft42 = createFantateam(42, "Fittofatto BC", NORD, [FilippoPasquon24, MassimilianoMoretti24, PietroSoramel24, MattiaRoiatti24, LucaAnedda24]);
const ft43 = createFantateam(43, "Caspinixx", SUD, [MarcoRizzi24, MassimilianoMoretti24, AndreaMoretti24, LucaSoramel24, PietroSoramel24]);
const ft44 = createFantateam(44, "Enea", NORD, [GabrieleMiani24, GiacomoFerigo24, DevinChiarcos24, VittorioBasso24, AntonioGri24]);
const ft45 = createFantateam(45, "TheFinalCut95", WEST, [AlessandroSant24, LucaSoramel24, DanieleGanzit24, UmbertoNobile24, EnricoSant24]);
const ft46 = createFantateam(46, "SEBA CENGA", WEST, [LucaDellaLonga24, DiegoNata24, AndreaMoretti24, UmbertoNobile24, DavideFaurlin24]);
const ft47 = createFantateam(47, "Carichi", NORD, [MiracleObichukwu24, AlessandroCostantini24, MatteoMargarit24, GiacomoPiacentini24, ChristianZanet24]);
const ft48 = createFantateam(48, "TheFinalCut95!", WEST, [AlessandroSant24, LucaSoramel24, DanieleGanzit24, UmbertoNobile24, EnricoSant24]);
const ft49 = createFantateam(49, "I Penny's Five", SUD, [MassimilianoRossi24, AlessandroRizzi24, TommasoMartello24, UmbertoNobile24, GiovanniTonizzo24]);
const ft50 = createFantateam(50, "Bmax", EST, [EnricoSant24, MattiaMasotti24, UmbertoNobile24, FilippoPasquon24, MarcoLombardo24]);
const ft51 = createFantateam(51, "Gli Sbronzatissimi", NORD, [GiovanniTonizzo24, UmbertoNobile24, AlessandroRizzi24, MarcoLombardo24, MattiaRoiatti24]);
const ft52 = createFantateam(52, "I belli", NORD, [LucaAnedda24, AlessandroRizzi24, PietroSoramel24, GiovanniTonizzo24, AlessandroCostantini24]);
const ft53 = createFantateam(53, "Golden shower", WEST, [MattiaMasotti24, AlessandroRizzi24, MatteoMargarit24, PietroSoramel24, MattiaRoiatti24]);
const ft54 = createFantateam(54, "DOZERS CONFEDERATI", SUD, [AlessandroSant24, AlessioFurlan24, AlessandroRizzi24, PietroSoramel24, LucaSoramel24]);
const ft55 = createFantateam(55, "Appalla", WEST, [VittorioBasso24, LucaDellaLonga24, AlessandroSant24, FilippoSappa24, MattiaMasotti24]);
const ft56 = createFantateam(56, "I pupetti", EST, [LucaSoramel24, AlessandroRizzi24, AlessandroCostantini24, VittorioGri24, PietroSoramel24]);
const ft57 = createFantateam(57, "The best", WEST, [GiacomoFerigo24, VittorioBasso24, GiovanniDalFarra24, TommasoMartello24, MassimilianoMoretti24]);
const ft58 = createFantateam(58, "Betta Zul", EST, [MattiaMasotti24, LucaDellaLonga24, MarcoSerrao24, FilippoSappa24, EnricoSant24]);
const ft59 = createFantateam(59, "Fil🥷", EST, [ThomasBaracetti24, ValentinoCigainero24, MassimilianoMoretti24, LarryTrevisan24, AlexMicottis24]);
const ft60 = createFantateam(60, "i Bolliti", SUD, [LarryTrevisan24, AlessandroCostantini24, DavidGaspardo24, MatteoSpagnolo24, AlessandroSantin24]);
const ft61 = createFantateam(61, "CT", NORD, [PietroSoramel24, GiovanniZanin24, TommasoMartello24, EnricoSant24, AntonioGri24]);
const ft62 = createFantateam(62, "I miracoli", WEST, [AlessandroSant24, AlessandroRizzi24, GiacomoPiacentini24, MattiaMasotti24, DevinChiarcos24]);
const ft63 = createFantateam(63, "Dr Tanzimat", SUD, [GiovanniZanin24, LucaSoramel24, PietroSoramel24, GiovanniTonizzo24, VittorioGri24]);
const ft64 = createFantateam(64, "Vichingo72", NORD, [LucaAnedda24, MassimilianoMoretti24, AlessandroCostantini24, MauroPerina24, MattiaRoiatti24]);
const ft65 = createFantateam(65, "ivan", NORD, [FilippoPasquon24, MiracleObichukwu24, AlessandroGalassi24, PietroSoramel24, AlessandroRizzi24]);
const ft66 = createFantateam(66, "Dusty Bottoms", WEST, [GiacomoPiacentini24, AlessandroCostantini24, LarryTrevisan24, MicheleDeAnna24, ChristianZanet24]);
const ft67 = createFantateam(67, "Spagnolo sposami", SUD, [SebastianoTonizzo24, MatteoSpagnolo24, MatteoMargarit24, DavideParon24, MichaelMargarit24]);
const ft68 = createFantateam(68, "Franta Palio", NORD, [FilippoSappa24, AlessandroRojatti24, AlessandroRizzi24, TommasoMartello24, GiovanniTonizzo24]);
const ft69 = createFantateam(69, "Nani del sud", SUD, [FilippoAgnoluzzi24, FilippoSappa24, LucaAnedda24, GiacomoSilvestri24, DavidGaspardo24]);
const ft70 = createFantateam(70, "Penelope's Team", SUD, [GiovanniTonizzo24, AlessandroSant24, MarcoPolo24, LucaSoramel24, FilippoSappa24]);
const ft71 = createFantateam(71, "Codroipen F.C.", WEST, [DavideParon24, DevinChiarcos24, GabrieleMiani24, EdoardoPicogna24, VittorioBasso24]);
const ft72 = createFantateam(72, "west solos", WEST, [MassimoMasotti24, MassimilianoMoretti24, GiacomoPiacentini24, MiracleObichukwu24, EnricoSant24]);
const ft73 = createFantateam(73, "Sud", SUD, [GiacomoPiacentini24, DevinChiarcos24, VittorioBasso24, EdoardoPicogna24, DavidGaspardo24]);
const ft74 = createFantateam(74, "NORDmania", NORD, [GioeleTudini24, MassimilianoMoretti24, FilippoPasquon24, MatteoSpagnolo24, MattiaMasotti24]);
const ft75 = createFantateam(75, "Ta qifsha pidhin", EST, [GionaTell24, AlessandroSantin24, MassimilianoMoretti24, MassimoBaldassi24, LarryTrevisan24]);
const ft76 = createFantateam(76, "Le bimbe di maso", EST, [MassimilianoMoretti24, MiracleObichukwu24, DenisVanin24, MassimoMasotti24, MattiaMasotti24]);
const ft77 = createFantateam(77, "DajeRoma", NORD, [TommasoMartello24, MiracleObichukwu24, DanieleGanzit24, MassimilianoMoretti24, LucaAnedda24]);
const ft78 = createFantateam(78, "👸🏼", NORD, [MattiaRoiatti24, MauroCuridori24, DanieleGanzit24, DiegoNata24, MatteoMargarit24]);
const ft79 = createFantateam(79, "Team17", WEST, [DanieleGanzit24, MassimilianoMoretti24, MattiaMasotti24, PaoloZorzi24, MassimilianoRossi24]);
const ft80 = createFantateam(80, "Trrr.... Non va!", SUD, [GiovanniTonizzo24, AlessandroSantin24, AlessandroSant24, DevinChiarcos24, DiegoNata24]);
const ft81 = createFantateam(81, "La Foca per una Codroipo Libera", NORD, [IacopoPivetta24, LarryTrevisan24, MiracleObichukwu24, ValentinoCigainero24, MarcoPolo24]);
const ft82 = createFantateam(82, "Non capisco di pallacanestro", NORD, [MatteoMargarit24, FilippoPasquon24, LucaGemo24, StefanoPolano24, GiovanniZanin24]);
const ft83 = createFantateam(83, "TEAM LG", NORD, [LucaGemo24, GiovanniZanin24, MatteoMargarit24, StefanoPolano24, EnricoSant24]);
const ft84 = createFantateam(84, "NonCapiscoNienteDiBasket", SUD, [StefanoPolano24, GiovanniZanin24, MatteoMargarit24, MassimilianoRossi24, DanieleGanzit24]);
const ft85 = createFantateam(85, "Nipponici", EST, [AndreaMoretti24, MattiaRoiatti24, DiegoNata24, AlessandroRizzi24, PietroSoramel24]);
const ft86 = createFantateam(86, "Massive Crash", EST, [LucaSoramel24, AlessandroSant24, PietroSoramel24, AlessandroRizzi24, AndreaMoretti24]);
const ft87 = createFantateam(87, "gigiovena", NORD, [GiovanniTonizzo24, PietroSoramel24, AlessandroRizzi24, MarcoSerrao24, VittorioGri24]);
const ft88 = createFantateam(88, "pausa giacomone", SUD, [ChristianFedrizzi24, VittorioGri24, MatteoSpagnolo24, PaoloZorzi24, DavidGaspardo24]);
const ft89 = createFantateam(89, "Michael Scott's Tots", NORD, [DavidGaspardo24, MiracleObichukwu24, AlessioFurlan24, DiegoNata24, MarcoPolo24]);
const ft90 = createFantateam(90, "ee4", SUD, [ValentinoCigainero24, MauroCuridori24, MicheleDeAnna24, MattiaMasotti24, TommasoMartello24]);
const ft91 = createFantateam(91, "Utopia (:", WEST, [AndreaMoretti24, AlessandroRojatti24, MarcoRizzi24, MassimilianoMoretti24, AlessandroRizzi24]);
const ft92 = createFantateam(92, "AirBall", EST, [AlessandroRojatti24, MassimilianoMoretti24, AlessandroRizzi24, AntonioGri24, LucaAnedda24]);
const ft93 = createFantateam(93, "Panade", NORD, [AntonioGri24, MassimilianoMoretti24, AlessandroRizzi24, AlessandroRojatti24, AndreaMoretti24]);
const ft94 = createFantateam(94, "DD", WEST, [MassimoMasotti24, MassimilianoMoretti24, AlessandroRizzi24, AntonioGri24, MatteoBazzaro24]);
const ft95 = createFantateam(95, "West4ever", WEST, [LucaSoramel24, MassimilianoMoretti24, AndreaMoretti24, EnricoSant24, StefanoPolano24]);
const ft96 = createFantateam(96, "Uoff", SUD, [MassimilianoMoretti24, MarcoRizzi24, LucaAnedda24, MattiaRoiatti24, AlessandroRizzi24]);
const ft97 = createFantateam(97, "SimoVinny", SUD, [ValentinoCigainero24, MassimilianoMoretti24, DavideFaurlin24, MattiaMasotti24, MarcoRizzi24]);
const ft98 = createFantateam(98, "Verità per GR", NORD, [MattiaRoiatti24, LucaAnedda24, MassimilianoMoretti24, MarcoRizzi24, FilippoPasquon24]);
const ft99 = createFantateam(99, "Maestro Shifu", NORD, [MattiaRoiatti24, MassimilianoMoretti24, AlessandroRizzi24, MarcoRizzi24, AndreaMoretti24]);
const ft100 = createFantateam(100, "A tutta birra", NORD, [MarcoRizzi24, LucaSoramel24, EugenioDeTina24, MassimilianoMoretti24, EnricoSant24]);
const ft101 = createFantateam(101, "Bitchass", WEST, [MarcoRizzi24, MassimilianoMoretti24, LucaAnedda24, LucaSoramel24, MattiaRoiatti24]);
const ft102 = createFantateam(102, "Azzzzz", EST, [GiovanniTonizzo24, ChristianZanet24, MicheleDeAnna24, MattiaRoiatti24, AlessandroCostantini24]);
const ft103 = createFantateam(103, "Super chicche", WEST, [LucaSoramel24, GiovanniTonizzo24, MarcoRizzi24, MassimilianoMoretti24, VittorioGri24]);
const ft104 = createFantateam(104, "il Fanto Padre", NORD, [LucaDellaLonga24, GiovanniZanin24, GiovanniTonizzo24, GiacomoPiacentini24, MarcoLombardo24]);
const ft105 = createFantateam(105, "dunk", WEST, [LucaSoramel24, PaoloZorzi24, ChristianFedrizzi24, EmanueleDaneluzzi24, FilippoAgnoluzzi24]);
const ft106 = createFantateam(106, "Vitellonseeee", SUD, [AlessandroSantin24, MattiaMasotti24, AlessandroSant24, GiacomoPiacentini24, AlessandroCostantini24]);
const ft107 = createFantateam(107, "Visca", NORD, [GiacomoSilvestri24, LarryTrevisan24, ChristianZanet24, MicheleDeAnna24, AlessandroRizzi24]);
const ft108 = createFantateam(108, "Ailantus", WEST, [MarcoRizzi24, MatteoMargarit24, ChristianZanet24, AlessandroRizzi24, MicheleDeAnna24]);
const ft109 = createFantateam(109, "Giangi", WEST, [ChristianFedrizzi24, GiacomoFerigo24, MicheleVendrame24, LorenzoSchinella24, DavideBroggi24]);
const ft110 = createFantateam(110, "PSYCHO P", NORD, [MarcoLombardo24, MarcoSerrao24, FilippoPasquon24, AlessandroCostantini24, VittorioBasso24]);
const ft111 = createFantateam(111, "fantadario", WEST, [LarryTrevisan24, FilippoPasquon24, AlessandroSant24, AlessandroGalassi24, MattiaMasotti24]);
const ft112 = createFantateam(112, "Leggende", NORD, [LarryTrevisan24, DanieleGanzit24, MarcoPolo24, MarcoSerrao24, AlessandroSant24]);
const ft113 = createFantateam(113, "Paperelle gay", EST, [EnricoSant24, WilliamIob24, AlessandroCostantini24, MarcoSerrao24, DenisVanin24]);
const ft114 = createFantateam(114, "CIPPI", NORD, [AlessandroCostantini24, VittorioGri24, LucaSoramel24, GionaTell24, AlessandroSant24]);
const ft115 = createFantateam(115, "Samu & Ema", EST, [AlessandroCostantini24, EnricoSant24, MattiaMasotti24, FilippoPasquon24, AlessandroRizzi24]);
const ft116 = createFantateam(116, "Robur Nazionale", WEST, [AlessandroRizzi24, MattiaMasotti24, MarcoSerrao24, MicheleDeAnna24, MiracleObichukwu24]);
const ft117 = createFantateam(117, "Giacomone", SUD, [MatteoSpagnolo24, ChristianZanet24, VittorioGri24, AlessandroSant24, WilliamIob24]);
const ft118 = createFantateam(118, "Team Canaja", NORD, [MarcoLombardo24, DiegoNata24, DanieleGanzit24, EnricoSant24, AlessioFurlan24]);
const ft119 = createFantateam(119, "Trrrr non va", SUD, [DiegoNata24, AndreaMoretti24, AlessioFurlan24, MarcoRizzi24, DavidGaspardo24]);
const ft120 = createFantateam(120, "Samu veni", SUD, [MiracleObichukwu24, AlessandroRizzi24, DavidGaspardo24, GioeleTudini24, MicheleDeAnna24]);
const ft121 = createFantateam(121, "Miangeles", NORD, [EdoardoPicogna24, FilippoPasquon24, RiccardoSchinella24, AlessandroSant24, GiovanniZanin24]);
const ft122 = createFantateam(122, "Amico di Simone Cengarle", NORD, [VittorioBasso24, MarcoLombardo24, DavidGaspardo24, MatteoBazzaro24, LarryTrevisan24]);
const ft123 = createFantateam(123, "Gabrindri", EST, [LucaSoramel24, AlessioFurlan24, FilippoPasquon24, DiegoNata24, MattiaMasotti24]);
const ft124 = createFantateam(124, "Olimpia Armadi", WEST, [MiracleObichukwu24, MarcoSerrao24, AlessandroSant24, MauroPerina24, AlessandroRizzi24]);
const ft125 = createFantateam(125, "PAMPA MENTALITY", SUD, [FilippoPasquon24, MattiaMasotti24, ChristianZanet24, MiracleObichukwu24, DiegoNata24]);
const ft126 = createFantateam(126, "Axeliathepoliceofficer", EST, [MatteoBazzaro24, MiracleObichukwu24, MarcoRizzi24, MarcoPolo24, LucaAnedda24]);
const ft127 = createFantateam(127, "ISTANBULKEBAB GLOBETROTTERS", SUD, [ValentinoCigainero24, MicheleDeAnna24, MattiaRoiatti24, LucaAnedda24, GiacomoSilvestri24]);
const ft128 = createFantateam(128, "Wpalio", SUD, [StefanoPolano24, DavidGaspardo24, ThomasBaracetti24, AlessandroGalassi24, EmanueleDaneluzzi24]);
const ft129 = createFantateam(129, "giulia", EST, [AlessandroRizzi24, MarcoRizzi24, LucaAnedda24, MattiaRoiatti24, EmanueleDaneluzzi24]);
const ft130 = createFantateam(130, "giorgina", EST, [MarcoRizzi24, ValentinoCigainero24, MattiaRoiatti24, LucaAnedda24, GiacomoSilvestri24]);
const ft131 = createFantateam(131, "CesoloilNordAP", NORD, [DiegoNata24, LucaAnedda24, FilippoPasquon24, AlessandroRizzi24, GiacomoPiacentini24]);
const ft132 = createFantateam(132, "Real Codroipen", WEST, [ThomasBaracetti24, GabrieleMiani24, SebastianoTonizzo24, MarcoMarchetti24, EdoardoPicogna24]);
const ft133 = createFantateam(133, "Pix", WEST, [GiacomoPiacentini24, VittorioBasso24, MarcoSerrao24, TommasoMartello24, AlessandroRizzi24]);
const ft134 = createFantateam(134, "FMB united", EST, [AlessandroRojatti24, GabrieleMiani24, MarcoRizzi24, MattiaRoiatti24, LucaAnedda24]);
const ft135 = createFantateam(135, "Ghisangeles Clippers II", EST, [MattiaMasotti24, ChristianZanet24, FilippoPasquon24, DavidGaspardo24, MassimilianoRossi24]);
const ft136 = createFantateam(136, "asdfg", WEST, [MassimilianoRossi24, MassimoMasotti24, EugenioDeTina24, DenisVanin24, LucaAnedda24]);
const ft137 = createFantateam(137, "zioperone", NORD, [LorenzoMoro24, DavidGaspardo24, FilippoPasquon24, VittorioBasso24, WilliamIob24]);
const ft138 = createFantateam(138, "Baskettone", NORD, [MattiaRoiatti24, GabrieleMiani24, MauroPerina24, MarcoMarchetti24, MassimoMasotti24]);
const ft139 = createFantateam(139, "Gate 2 Aeroporto Malpensa-Silvio Berlusconi Milano✈️", EST, [DavidGaspardo24, FilippoPasquon24, MarcoPolo24, MattiaMasotti24, LucaGemo24]);
const ft140 = createFantateam(140, "Arrosto & tiro", EST, [IacopoPivetta24, WilliamIob24, DenisVanin24, DanieleGanzit24, MarcoSerrao24]);
const ft141 = createFantateam(141, "West riformulato", WEST, [VittorioGri24, ChristianZanet24, MauroPerina24, MattiaRoiatti24, AlessandroRizzi24]);
const ft142 = createFantateam(142, "Ratflingbanana", SUD, [DavideBroggi24, MattiaMasotti24, GiacomoSilvestri24, ChristianZanet24, DavidGaspardo24]);
const ft143 = createFantateam(143, "Ducks", NORD, [MarcoRizzi24, MarcoLombardo24, DavidGaspardo24, FilippoPasquon24, LorenzoMoro24]);
const ft144 = createFantateam(144, "Trevi BC", SUD, [DavidGaspardo24, FilippoPasquon24, MarcoLombardo24, EnricoSant24, MarcoRizzi24]);
const ft145 = createFantateam(145, "FIRETEAM!", NORD, [VittorioGri24, MarcoLombardo24, MarcoSerrao24, AlessandroRizzi24, VittorioBasso24]);
const ft146 = createFantateam(146, "Orsa", NORD, [GabrieleMiani24, LucaAnedda24, AlessandroSantin24, LucaDellaLonga24, MarcoPolo24]);
const ft147 = createFantateam(147, "Fantasia 0", NORD, [GioeleTudini24, GabrieleMiani24, MarcoMarchetti24, MicheleVendrame24, LorenzoSchinella24]);
const ft148 = createFantateam(148, "Los Vikingos", NORD, [MarcoRizzi24, AlessandroRizzi24, DiegoNata24, LucaSoramel24, VittorioGri24]);
const ft149 = createFantateam(149, "Quelli di zona", EST, [AndreaMoretti24, AlessandroRizzi24, DiegoNata24, MassimilianoRossi24, LucaSoramel24]);
const ft150 = createFantateam(150, "Furbicomevolpi", EST, [MarcoSerrao24, WilliamIob24, DenisVanin24, SimoneMartinelli24, AlessandroSant24]);
const ft151 = createFantateam(151, "qwerty", EST, [GionaTell24, LorenzoMoro24, SimoneMartinelli24, MauroPerina24, EdoardoPicogna24]);
const ft152 = createFantateam(152, "Top con Gabri", WEST, [GabrieleMiani24, DevinChiarcos24, MassimilianoRossi24, MatteoSpagnolo24, VittorioBasso24]);
const ft153 = createFantateam(152, "Optimum", WEST, [UmbertoNobile24, DevinChiarcos24, FilippoSappa24, MarcoSerrao24, VittorioBasso24]);

    const fantateams = [
        ft1, ft2, ft3, ft4, ft5, ft6, ft7, ft8, ft9, ft10, 
        ft11, ft12, ft13, ft14, ft15, ft16, ft17, ft18, ft19, ft20, 
        ft21, ft22, ft23, ft24, ft25, ft26, ft27, ft28, ft29, ft30, 
        ft31, ft32, ft33, ft34, ft35, ft36, ft37, ft38, ft39, ft40, 
        ft41, ft42, ft43, ft44, ft45, ft46, ft47, ft48, ft49, ft50, 
        ft51, ft52, ft53, ft54, ft55, ft56, ft57, ft58, ft59, ft60, 
        ft61, ft62, ft63, ft64, ft65, ft66, ft67, ft68, ft69, ft70, 
        ft71, ft72, ft73, ft74, ft75, ft76, ft77, ft78, ft79, ft80, 
        ft81, ft82, ft83, ft84, ft85, ft86, ft87, ft88, ft89, ft90, 
        ft91, ft92, ft93, ft94, ft95, ft96, ft97, ft98, ft99, ft100, 
        ft101, ft102, ft103, ft104, ft105, ft106, ft107, ft108, ft109, ft110, 
        ft111, ft112, ft113, ft114, ft115, ft116, ft117, ft118, ft119, ft120, 
        ft121, ft122, ft123, ft124, ft125, ft126, ft127, ft128, ft129, ft130, 
        ft131, ft132, ft133, ft134, ft135, ft136, ft137, ft138, ft139, ft140, 
        ft141, ft142, ft143, ft144, ft145, ft146, ft147, ft148, ft149, ft150, 
        ft151, ft152, ft153
      ];
      
    

    const players = players24;
    //Esporta i tipi di dati per renderli disponibili agli altri script
    export {
        player_type,
        rione_type,
        fantateam_type,
        // MassimilianoMoretti, AndreaMoretti, LarryTrevisan, AlessandroCostantini, MatteoMargarit,
        // MauroCuridori, ChristianZanet, GiacomoPiacentini, GiovanniDalFarra, MiracleObichukwu,
        // LucaDellaLonga, AlessandroRojatti, MicheleGorasso, GiacomoFerigo, UmbertoNobile,
        // DevinChiarcos, ValentinoCigainero, MicheleDeAnna, DavideParon, AlessioFurlan,
        // MichaelMargarit, SebastianoTonizzo,
        // DanieleGanzit, GiacomoSilvestri, VittorioGri, VittorioBasso, AlessandroRizzi,
        // MassimoBaldassi, GabrieleMiani, MarcoMarchetti, MarcoLombardo, MicheleVendrame,
        // LorenzoSchinella, GioeleTudini, FilippoPasquon, TommasoMartello, MarcoRizzi,
        // DavidGaspardo, AntonioGri, RiccardoSchinella,
        // SimoneMartinelli, MatteoSpagnolo, DavideFaurlin, GiovanniTonizzo, AlessandroSant,
        // MatteoBazzaro, AlessandroSantin, AlessandroGalassi, PietroSoramel, FilippoAgnoluzzi,
        // EmanueleDaneluzzi, LucaSoramel, PaoloZorzi, ChristianFedrizzi, FilippoSappa,
        // GiovanniZanin, EnricoSant, StefanoPolano,
        // MarcoPolo, MarcoSerrao, WilliamIob, DavideBroggi, AlexMicottis,
        // MassimilianoRossi, MassimoMasotti, EugenioDeTina, LucaAnedda, DenisVanin,
        // ThomasBaracetti, LucaGemo, DiegoNata, MattiaRoiatti, EdoardoPicogna,
        // MauroPerina, LorenzoMoro, GionaTell, IacopoPivetta, MattiaMasotti,
        NORD, SUD, EST, WEST,
        // ft1, ft2, ft3, ft4, ft5, ft6, ft7, ft8, ft9, ft10, 
        // ft11, ft12, ft13, ft14, ft15, ft16, ft17, ft18, ft19, ft20, 
        // ft21, ft22, ft23, ft24, ft25, ft26, ft27, ft28, ft29, ft30, 
        // ft31, ft32, ft33, ft34, ft35, ft36, ft37, ft38, ft39, ft40, 
        // ft41, ft42, ft43, ft44, ft45, ft46, ft47, ft48, ft49, ft50, 
        // ft51, ft52, ft53, ft54, ft55, ft56, ft57, ft58, ft59, ft60, 
        // ft61, ft62, ft63, ft64, ft65, ft66, ft67, ft68, ft69, ft70, 
        // ft71, ft72, ft73, ft74, ft75, ft76, ft77, ft78, ft79, ft80, 
        // ft81, ft82, ft83, ft84, ft85, ft86, ft87, ft88, ft89, ft90, 
        // ft91, ft92,


    


        fantateams, players, players24, pdkWeights,td3Weights
    };



