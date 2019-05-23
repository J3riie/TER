var express = require('express');
var app = express();
var mysql = require('mysql2');

// config for your database
var con = mysql.createConnection({
	host: 'venus',
	user: 'ceven',
	password: 'Deutsch',
	database: 'ceven'
});

var res = { prixComp: 0, prixDep: 0, prixType: 0};

var vraiCP=0;

function calculComparaisonType(res, maisonType, prixCP, taille, etatBien, etatCopropriete, etatMur, etatElectricitePlomberie, etatIsolation, luminosite,
	nuisanceSonore, population, proximiteTransport, proximiteEcole, proximiteCommerce, eauUsee, bienMitoyen, fibre, piscine, jardin, ascenseur, parking,
	veranda, balcon, terrasse, terrain, cave, grenier, nbChambre, superficieChambre, superficieCuisine, superficieSejour, superficieWcBain) {

	var prixMaisonType = maisonType.Prix;
        //console.log(prixMaisonType);
        var tailleType = maisonType.Taille;
        //console.log(tailleType);
        //var typeMaisonType = maisonType.getTypeB();
        var nbChambreType = maisonType.NbCh;
        //console.log(nbChambreType);
        var superficieChambreType = maisonType.SuCh;
        //console.log(superficieChambreType);
        var superficieCuisineType = maisonType.SuCu;
        //console.log(superficieCuisineType);
        var superficieSejourType = maisonType.SuSe;
        //console.log(superficieSejourType);
        var superficieWcBainType = maisonType.SuWc;
        //console.log(superficieWcBainType);
        var etatBienType = maisonType.EdB;
        //console.log(etatBienType);
        var etatCoproprieteType = maisonType.EdC;
        //console.log(etatCoproprieteType);
        var etatMurType = maisonType.EdM;
        //console.log(etatMurType);
        var etatElectricitePlomberieType = maisonType.EEP;
        //console.log(etatElectricitePlomberieType);
        var etatIsolationType = maisonType.EI;
        //console.log(etatIsolationType);
        var luminositeType = maisonType.Lum;
        //console.log(luminositeType);
        var nuisanceSonoreType = maisonType.Son;
        //console.log(nuisanceSonoreType);
        var populationType = maisonType.Pop;
        //console.log(populationType);
        var proximiteTransportType = maisonType.ProxTrans;
        //console.log(proximiteTransportType);
        var proximiteEcoleType = maisonType.ProxEcole;
        //console.log(proximiteEcoleType);
        var proximiteComType = maisonType.ProxCom;
        //console.log(proximiteComType);
        var eauUseeType = maisonType.Orient;
        //console.log(eauUseeType);
        var bienMitoyenType = maisonType.EauUsee;
        //console.log(bienMitoyenType);
        var fibreType = maisonType.Mitoyen;
        //console.log(fibreType);
        var piscineType = maisonType.Piscine;
        //console.log(piscineType);
        var jardinType = maisonType.Jardin;
        //console.log(jardinType);
        var ascenseurType = maisonType.Ascenseur;
        //console.log(ascenseurType);
        var parkingType = maisonType.Parking;
        //console.log(parkingType);
        var verandaType = maisonType.Veranda;
        //console.log(verandaType);
        var balconType = maisonType.Balcon;
        //console.log(balconType);
        var terrasseType = maisonType.Terrasse;
        //console.log(terrasseType);
        var terrainType = maisonType.Terrain;
        //console.log(terrainType);
        var caveType = maisonType.Cave;
        //console.log(caveType);
        var grenierType = maisonType.Grenier;
        //console.log(grenierType);

        var prixReg = prixCP.PrixReg;
        //console.log(prixReg);

        var prixM2MaisonType = (prixMaisonType / tailleType);
        //console.log(prixM2MaisonType);


        var monEstimation = prixMaisonType;
        var prixChambre = 100;
        var prixDuM2 = prixM2MaisonType;
        var pointEtatBien = 0.03;
        var pointEtatCopropriete = 0.03;
        var pointEtatMur = 0.03;
        var pointEtatIsolement = 0.03;
        var pointEtatElectricitePlomberie = 0.03;
        var pointLuminosite = 0.03;
        var pointNuisanceSonore = 0.03;
        var pointPopulation = 0.03;
        var pointTransport = 0.03;
        var pointEcole = 0.03;
        var pointCom = 0.03;
        var pointEauUsee = 0.03;
        var pointBienMitoyen = 0.03;
        var pointFibre = 0.05;
        var pointPiscine = 0.05;
        var pointJardin = 0.05;
        var pointAscenseur = 0.05;
        var pointParking = 0.05;
        var pointVeranda = 0.05;
        var pointBalcon = 0.05;
        var pointTerrasse = 0.05;
        var pointTennis = 0.05;
        var pointCave = 0.05;
        var pointGrenier = 0.05;
        var coefRegional = (prixReg / prixM2MaisonType);


        if(nbChambre < nbChambreType)
        {
        	monEstimation = monEstimation - (nbChambreType - nbChambre) * prixChambre;
        }
        else if(nbChambre == nbChambreType)
        {
        	monEstimation = monEstimation;
        }
        else
        {
        	monEstimation = monEstimation + (nbChambre - nbChambreType) * prixChambre;
        }


        if(superficieChambre < superficieChambreType)
        {
        	monEstimation = monEstimation - (superficieChambreType - superficieChambre) * prixDuM2;
        }
        else if(superficieChambre == superficieChambreType)
        {
        	monEstimation = monEstimation;
        }
        else if(superficieChambre > superficieChambreType)
        {
        	monEstimation = monEstimation + (superficieChambre - superficieChambreType) * prixDuM2;
        }


        if (superficieCuisine < superficieCuisineType)
        {
        	monEstimation = monEstimation - (superficieCuisineType - superficieCuisine) * prixDuM2;
        }
        else if (superficieCuisine == superficieCuisineType)
        {
        	monEstimation = monEstimation;
        }
        else if (superficieCuisine > superficieCuisineType)
        {
        	monEstimation = monEstimation + (superficieCuisine - superficieCuisineType) * prixDuM2;
        }

        if (superficieWcBain < superficieWcBainType)
        {
        	monEstimation = monEstimation - (superficieWcBainType - superficieWcBain) * prixDuM2;
        }
        else if (superficieWcBain == superficieWcBainType)
        {
        	monEstimation = monEstimation;
        }
        else if (superficieWcBain > superficieWcBainType)
        {
        	monEstimation = monEstimation + (superficieWcBain - superficieWcBainType) * prixDuM2;
        }


        if (superficieSejour < superficieSejourType)
        {
        	monEstimation = monEstimation - (superficieSejourType - superficieSejour) * prixDuM2;
        }
        else if (superficieSejour == superficieSejourType)
        {
        	monEstimation = monEstimation;
        }
        else if (superficieSejour > superficieSejourType)
        {
        	monEstimation = monEstimation + (superficieSejour - superficieSejourType) * prixDuM2;
        }


        if (etatBien < etatBienType){
        	monEstimation = monEstimation - (etatBienType - etatBien) * pointEtatBien;

        }
        else if (etatBien == etatBienType){
        	monEstimation = monEstimation;

        }
        else if (etatBien > etatBienType){
        	monEstimation = monEstimation + (etatBien - etatBienType) * pointEtatBien;
        }



        if (etatCopropriete < etatCoproprieteType){
        	monEstimation = monEstimation - (etatCoproprieteType - etatCopropriete) * pointEtatCopropriete;
        }
        else if (etatCopropriete == etatCoproprieteType){
        	monEstimation = monEstimation;

        }
        else if (etatCopropriete > etatCoproprieteType){
        	monEstimation = monEstimation + (etatCopropriete - etatCoproprieteType) * pointEtatCopropriete;
        }



        if(etatMur < etatMurType){
        	monEstimation = monEstimation - (etatMurType - etatMur) * pointEtatMur;
        }
        else if(etatMur == etatMurType){
        	monEstimation = monEstimation;
        }

        if(etatMur > etatMurType){
        	monEstimation = monEstimation + (etatMur - etatMurType) * pointEtatMur;
        }




        if (etatElectricitePlomberie < etatElectricitePlomberieType){
        	monEstimation = monEstimation - (etatElectricitePlomberieType - etatElectricitePlomberie) * pointEtatElectricitePlomberie;
        }

        else if (etatElectricitePlomberie == etatElectricitePlomberieType){
        	monEstimation = monEstimation ;
        }

        else if (etatElectricitePlomberie > etatElectricitePlomberieType){
        	monEstimation = monEstimation + (etatElectricitePlomberie - etatElectricitePlomberieType) * pointEtatElectricitePlomberie;
        }




        if(etatIsolation < etatIsolationType){
        	monEstimation = monEstimation - (etatIsolationType - etatIsolation) * pointEtatIsolement;
        }
        else if(etatIsolation == etatIsolationType){
        	monEstimation = monEstimation;
        }
        else if(etatIsolation > etatIsolationType){
        	monEstimation = monEstimation + (etatIsolation - etatIsolationType) * pointEtatIsolement;
        }

        if (luminosite < luminositeType){
        	monEstimation = monEstimation - (luminositeType - luminosite) * pointLuminosite;
        }
        else if(luminosite == luminositeType){
        	monEstimation = monEstimation;
        }
        else if(luminosite > luminositeType){
        	monEstimation = monEstimation + (luminosite - luminositeType) * pointLuminosite;
        }



        if (nuisanceSonore < nuisanceSonoreType){
        	monEstimation = monEstimation - (nuisanceSonoreType - nuisanceSonore) * pointNuisanceSonore;
        }
        else if (nuisanceSonore == nuisanceSonoreType){
        	monEstimation = monEstimation;
        }

        else if (nuisanceSonore > nuisanceSonoreType){
        	monEstimation = monEstimation + (nuisanceSonore - nuisanceSonoreType) * pointNuisanceSonore;
        }




        if(population < populationType)
        {
        	monEstimation = monEstimation - (populationType - population) * pointPopulation;
        }
        else if(population == populationType)
        {
        	monEstimation = monEstimation;
        }
        else if(population > populationType){
        	monEstimation = monEstimation + (population - populationType) * pointPopulation;
        }



        if(proximiteTransport < proximiteTransportType){
        	monEstimation = monEstimation - (proximiteTransportType - proximiteTransport) * pointTransport;
        }
        else if(proximiteTransport == proximiteTransportType){
        	monEstimation = monEstimation;
        }
        else if(proximiteTransport > proximiteTransportType){
        	monEstimation = monEstimation + (proximiteTransport - proximiteTransportType) * pointTransport;
        }




        if(proximiteEcole < proximiteEcoleType){
        	monEstimation = monEstimation - (proximiteEcoleType - proximiteEcole) * pointEcole;
        }
        else if(proximiteEcole == proximiteEcoleType){
        	monEstimation = monEstimation;
        }
        else if(proximiteEcole > proximiteEcoleType){
        	monEstimation = monEstimation + (proximiteEcole - proximiteEcoleType) * pointEcole;
        }



        if(proximiteCommerce < proximiteComType){
        	monEstimation = monEstimation - (proximiteComType - proximiteCommerce) * pointCom;
        }
        else if(proximiteCommerce == proximiteComType){
        	monEstimation = monEstimation;
        }
        else if(proximiteCommerce > proximiteComType){
        	monEstimation = monEstimation + (proximiteCommerce - proximiteComType) * pointCom;
        }



        if(eauUsee != eauUseeType){
        	monEstimation = monEstimation - pointEauUsee;
        }


        if(bienMitoyen != bienMitoyenType){
        	monEstimation = monEstimation - pointBienMitoyen;
        }


        if(fibre != fibreType){
        	monEstimation = monEstimation + pointFibre;
        }


        if(piscine != piscineType){
        	monEstimation = monEstimation + pointPiscine;
        }


        if(jardin != jardinType){
        	monEstimation = monEstimation - pointJardin;
        }


        if(ascenseur != ascenseurType){
        	monEstimation = monEstimation + pointAscenseur;
        }


        if(parking != parkingType){
        	monEstimation = monEstimation - pointParking;
        }

        if(veranda != verandaType){
        	monEstimation = monEstimation + pointVeranda;
        }


        if(balcon != balconType){
        	monEstimation = monEstimation - pointBalcon;
        }


        if(terrasse != terrasseType){
        	monEstimation = monEstimation + pointTerrasse;
        }


        if(terrain != terrainType){
        	monEstimation = monEstimation + pointTennis;
        }


        if(cave != caveType){
        	monEstimation = monEstimation + pointCave;
        }


        if(grenier != grenierType){
        	monEstimation = monEstimation + pointGrenier;
        }

        //console.log(monEstimation * coefRegional);
        res.prixType=(monEstimation * coefRegional);   
        return 0;
    }

    function beforeCalculComparaisonType(res, vraiCP, taille, etatBien, etatCopropriete, etatMur, etatElectricitePlomberie, etatIsolation, luminosite,
    	nuisanceSonore, population, proximiteTransport, proximiteEcole, proximiteCommerce, eauUsee, bienMitoyen, fibre, piscine, jardin, ascenseur, parking,
    	veranda, balcon, terrasse, terrain, cave, grenier, nbChambre, superficieChambre, superficieCuisine, superficieSejour, superficieWcBain)
    {
    	con.query('SELECT * FROM BienType',function (err,results,fields)
    	{
    		if(err) throw err;
    		var MaisonType = results[0];
    		con.query('SELECT PrixReg FROM CodePostal WHERE CodeP='+vraiCP,function (err,results,fields)
    		{
    			if(err) throw err;
    			var prixReg = results[0]; 
    			calculComparaisonType(res, MaisonType, prixReg, taille, etatBien, etatCopropriete, etatMur, etatElectricitePlomberie, etatIsolation, luminosite,
    				nuisanceSonore, population, proximiteTransport, proximiteEcole, proximiteCommerce, eauUsee, bienMitoyen, fibre, piscine, jardin, ascenseur, parking,
    				veranda, balcon, terrasse, terrain, cave, grenier, nbChambre, superficieChambre, superficieCuisine, superficieSejour, superficieWcBain);
    		});
    	});
    }

    beforeCalculComparaisonType(res, 34, 100, 50, 50,50,50,50, 50,50,50, 50,50,50,50,'null','on','null','null','null','null','null','null','null','null','null','null',
    	4,40,20,30,20);
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



function calculComparaisonBDD(res,indiceCritere, biens, anciensBiens, CP, taille, nbPiece, nbSDB, etatBien, etatCopro, etatMur, 
	etatElectricitePlomberie, etatIsolement, luminosite, nuisanceSonore, population, proximiteTransport, proximiteEcole, 
	proximiteCommerce, orientation, eauUsee, mitoyen, fibre, piscine, jardin, ascenseur, parking, veranda, balcon, 
	terrasse, terrain, cave, grenier, nbChambre, superficieChambre, superficieCuisine, superficieSejour, superficieSDB
	){

	//var resultat = 0;

	//var sortir=0;
    //var anciensBiens = biens;

    // s'il n'y a rien qui correspond dans la BDD
    var listVide = {};
    if(biens[0] != listVide)
    {
    //while((biens.length>5)&&(sortir==0))
    //{                        
        anciensBiens = biens;
        switch(indiceCritere)
        {
			case 0: 
                //biens = ModeleBienImmo::getBienCompPlusNbP($CP,$Taille,$NBP);
                con.query('SELECT * FROM BienImmo WHERE CodePost='+vraiCP+' AND Taille='+taille+' AND NBP='+nbPiece,function (err,results,fields)
                {
                	if(results.length>5)
                	{
                		indiceCritere=indiceCritere+1;
                		calculComparaisonBDD(res,indiceCritere, results, biens, vraiCP, taille, nbPieces, nbSalleDB, etatBien, etatCopropriete, etatMur, etatElectricitePlomberie, etatIsolation, luminosite,
                			nuisanceSonore, population, proximiteTransport, proximiteEcole, proximiteCommerce, eauUsee, bienMitoyen, fibre, piscine, jardin, ascenseur, parking,
                			veranda, balcon, terrasse, terrain, cave, grenier, nbChambre, superficieChambre, superficieCuisine, superficieSejour, superficieWcBain);

                	}
                	else{
                		if(results.length==0)
                		{
                			affichePrixComparaison(res,biens);
                			return 0;
                		}else
                		{
                			affichePrixComparaison(res,results);
                			return 0;
                		}

                	}; 

                }); 
                break;
            case 1:        
                //biens = ModeleBienImmo::getBienCompPlusNbCh($CP,$Taille,$NBP,$nbChambre);
                con.query('SELECT * FROM BienImmo WHERE CodePost='+vraiCP+' AND Taille='+taille+' AND NbP='+nbPiece+' AND NbCh='+nbChambre,function (err,results,fields)
                    {
                    	biens = results;
                    	if(biens.length>5)
                    	{
                    		indiceCritere=indiceCritere+1;
                    		calculComparaisonBDD(res,indiceCritere, results, biens, vraiCP, taille, nbPieces, nbSalleDB, etatBien, etatCopropriete, etatMur, etatElectricitePlomberie, etatIsolation, luminosite,
                    			nuisanceSonore, population, proximiteTransport, proximiteEcole, proximiteCommerce, eauUsee, bienMitoyen, fibre, piscine, jardin, ascenseur, parking,
                    			veranda, balcon, terrasse, terrain, cave, grenier, nbChambre, superficieChambre, superficieCuisine, superficieSejour, superficieWcBain);

                    	}
                    	else
                    	{
                    		if(results.length==0)
                    		{
                    			affichePrixComparaison(res,biens);
                    			return 0;
                    		}else
                    		{
                    			affichePrixComparaison(res,results);
                    			return 0;
                    		}

                    	};  
                    });
                    break;
            case 2:	        
                //biens = ModeleBienImmo::getBienCompPlusSuCh($CP,$Taille,$NBP,$nbChambre,$superficieChambre);
                con.query('SELECT * FROM BienImmo WHERE CodePost='+vraiCP+' AND Taille='+taille+' AND NbP='+nbPiece+' AND NbCh='+nbChambre+' AND SuCh='+superficieChambre,function (err,results,fields)
                {
                	biens = results;
                	if(biens.length>5)
                	{
                		indiceCritere=indiceCritere+1;
                		calculComparaisonBDD(res,indiceCritere, results, biens, vraiCP, taille, nbPieces, nbSalleDB, etatBien, etatCopropriete, etatMur, etatElectricitePlomberie, etatIsolation, luminosite,
                			nuisanceSonore, population, proximiteTransport, proximiteEcole, proximiteCommerce, eauUsee, bienMitoyen, fibre, piscine, jardin, ascenseur, parking,
                			veranda, balcon, terrasse, terrain, cave, grenier, nbChambre, superficieChambre, superficieCuisine, superficieSejour, superficieWcBain);

                	}
                	else{
                		if(results.length==0)
                		{
                			affichePrixComparaison(res,biens);
                			return 0;
                		}else
                		{
                			affichePrixComparaison(res,results);
                			return 0;
                		}

                	}; 
                });

                break;
           	case 3:	        
                //biens = ModeleBienImmo::getBienCompPlusSuSe($CP,$Taille,$NBP,$nbChambre,$superficieChambre,$superficieSejour);
                con.query('SELECT * FROM BienImmo WHERE CodePost='+vraiCP+' AND Taille='+taille+' AND NbP='+nbPiece+' AND NbCh='+nbChambre+' AND SuCh='+superficieChambre+' AND SuSe='+superficieSejour,function (err,results,fields)
                {
                	biens = results;
                	if(biens.length>5)
                	{
                		indiceCritere=indiceCritere+1;
                		calculComparaisonBDD(res,indiceCritere, results, biens, vraiCP, taille, nbPieces, nbSalleDB, etatBien, etatCopropriete, etatMur, etatElectricitePlomberie, etatIsolation, luminosite,
                			nuisanceSonore, population, proximiteTransport, proximiteEcole, proximiteCommerce, eauUsee, bienMitoyen, fibre, piscine, jardin, ascenseur, parking,
                			veranda, balcon, terrasse, terrain, cave, grenier, nbChambre, superficieChambre, superficieCuisine, superficieSejour, superficieWcBain);

                	}
                	else{
                		if(results.length==0)
                		{
                			affichePrixComparaison(res,biens);
                			return 0;
                		}else
                		{
                			affichePrixComparaison(res,results);
                			return 0;
                		}

                	};  
                });
                break;
            case 4: 	       
                //biens = ModeleBienImmo::getBienCompPlusSuCu($CP,$Taille,$NBP,$nbChambre,$superficieChambre,$superficieSejour,$superficieCuisine);
                con.query('SELECT * FROM BienImmo WHERE CodePost='+vraiCP+' AND Taille='+taille+' AND NbP='+nbPiece+' AND NbCh='+nbChambre+' AND SuCh='+superficieChambre+' AND SuSe='+superficieSejour+' AND SuCu='+superficieCuisine,function (err,results,fields)
                {
                	biens = results;
                	if(biens.length>5)
                	{
                		indiceCritere=indiceCritere+1;
                		calculComparaisonBDD(res,indiceCritere, results, biens, vraiCP, taille, nbPieces, nbSalleDB, etatBien, etatCopropriete, etatMur, etatElectricitePlomberie, etatIsolation, luminosite,
                			nuisanceSonore, population, proximiteTransport, proximiteEcole, proximiteCommerce, eauUsee, bienMitoyen, fibre, piscine, jardin, ascenseur, parking,
                			veranda, balcon, terrasse, terrain, cave, grenier, nbChambre, superficieChambre, superficieCuisine, superficieSejour, superficieWcBain);

                	}
                	else{
                		if(results.length==0)
                		{
                			affichePrixComparaison(res,biens);
                			return 0;
                		}else
                		{
                			affichePrixComparaison(res,results);
                			return 0;
                		}

                	}; 
                });
                break;
        }
    }else
    {
    	console.log("Notre base de données est faible.")
    }
}



function beforeCalculComparaisonBDD(res,vraiCP, taille, nbPieces, nbSalleDB, etatBien, etatCopropriete, etatMur, etatElectricitePlomberie, etatIsolation, luminosite,
	nuisanceSonore, population, proximiteTransport, proximiteEcole, proximiteCommerce, eauUsee, bienMitoyen, fibre, piscine, jardin, ascenseur, parking,
	veranda, balcon, terrasse, terrain, cave, grenier, nbChambre, superficieChambre, superficieCuisine, superficieSejour, superficieWcBain)
{
	con.query('SELECT * FROM BienImmo WHERE CodePost='+vraiCP+' AND Taille BETWEEN '+(taille-10)+' AND '+(taille+10),function (err,results,fields)
	{
		if(err) throw err;
		calculComparaisonBDD(res,0, results,{}, vraiCP, taille, nbPieces, nbSalleDB, etatBien, etatCopropriete, etatMur, etatElectricitePlomberie, etatIsolation, luminosite,
			nuisanceSonore, population, proximiteTransport, proximiteEcole, proximiteCommerce, eauUsee, bienMitoyen, fibre, piscine, jardin, ascenseur, parking,
			veranda, balcon, terrasse, terrain, cave, grenier, nbChambre, superficieChambre, superficieCuisine, superficieSejour, superficieWcBain);
	});
}

beforeCalculComparaisonBDD(res,34, 110, 5, 2,50, 50,50,50,50, 50,50,50, 50,50,50,50,'null','on','null','null','null','null','null','null','null','null','null','null',
	4,40,20,30,20); 

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------




function calculTailleCP(res,vraiCP, taille) {	
	con.query('SELECT PrixDep FROM CodePostal WHERE CodeP='+vraiCP,function (err,results,fields)
	{
		if(err) throw err;
		var prixEstimation = taille * results[0].PrixDep; 
		res.prixDep=prixEstimation;
	});
        // var prixCP = vraiCP->getPrixDep();       
}
calculTailleCP(10,1);


//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function affichePrixComparaison(res,ListeSortante)
{
	var monEstimation = 0;     
	//console.log(res);
	for (var i = ListeSortante.length - 1; i >= 0; i--) {
		monEstimation = monEstimation + ListeSortante[i].Prix;
		if(i==0)
		{
			//console.log(monEstimation/(ListeSortante.length));
			res.prixComp = monEstimation/(ListeSortante.length);
		}
	}
}

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function runAlgorithms(res)
{
	/*
	var execAllFct = function()
	{
		console.log("EXEC");
	    return function()
	    {
			console.log("function");
	        for (var i = 0; i <4; i++)
	        {
				console.log("for");
				switch(i)
		        {
					case 0:
						console.log("0");
						beforeCalculComparaisonBDD(res,34, 110, 5, 2,50, 50,50,50,50, 50,50,50, 50,50,50,50,'null','on','null','null','null','null','null','null','null','null','null','null',
		    4,40,20,30,20);
						break;

					case 1:
						console.log("1");
						beforeCalculComparaisonType(res, 34, 110, 50, 50,50,50,50, 50,50,50, 50,50,50,50,'null','on','null','null','null','null','null','null','null','null','null','null',
		    4,40,20,30,20);
						break;

					case 2:
						console.log("2");
						calculTailleCP(res,34,110);
						break;

					case 3:
						console.log("3");
						return res;
						break;
				}
			}
    	}	
	};
	console.log("LetrucSimple");
	*/
	/*
	var execAllFct = function(fctTab) {
    return function() {
        for (var i=0; i<fctTab.length; i++) {
            tabfct[i]()
        }
    }
};
 
var devenirCalife = [
    epouserPrincesse: beforeCalculComparaisonBDD(res,34, 110, 5, 2,50, 50,50,50,50, 50,50,50, 50,50,50,50,'null','on','null','null','null','null','null','null','null','null','null','null',
		    4,40,20,30,20),
    comploterAvecIznogoud: beforeCalculComparaisonType(res, 34, 110, 50, 50,50,50,50, 50,50,50, 50,50,50,50,'null','on','null','null','null','null','null','null','null','null','null','null',
		    4,40,20,30,20),
    doublerIznogoud: calculTailleCP(res,34,110),
    SavourerSonHarem: "chibrax", 
];

	execAllFct(devenirCalife);
	*/


	beforeCalculComparaisonBDD(res,34, 110, 5, 2,50, 50,50,50,50, 50,50,50, 50,50,50,50,'null','on','null','null','null','null','null','null','null','null','null','null', 4,40,20,30,20);
	beforeCalculComparaisonType(res, 34, 110, 50, 50,50,50,50, 50,50,50, 50,50,50,50,'null','on','null','null','null','null','null','null','null','null','null','null', 4,40,20,30,20);
	calculTailleCP(res,34,110);
	setTimeout(function() {
        console.log(res);
	}, 3000);
	
}

runAlgorithms(res);
//console.log(res);

/*
resultats = {ListeBien : []};

function getBienImmo()
{
	con.query('SELECT PrixDep FROM CodePostal WHERE CodeP='+vraiCP,function (err,results,fields)
		{
			if(err) throw err;
			resultats.ListeBien = results;

		});
}

getBienImmo();
*/

/*
con.query(
	'SELECT * FROM BienImmo',
	function(err,results,fields) {
		console.log(results); // results contains rows returned by server
		console.log(fields); // fields contains extra meta data about results
	}
	);
	*/
	


	var server = app.listen(45678, function () {
		console.log('Server is running..');
	});
