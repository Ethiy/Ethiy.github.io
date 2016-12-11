function initialize() {

	Geoportal.load(
		"map-canvas",
		["w2lx2u9kfvk0c5trs1t6gn1l"],
		{address : '73 avenue de Paris Saint­Mandé'},
		8,
		{layers:[
            "TRANSPORTNETWORKS.ROADS",
			"TRANSPORTNETWORKS.RAILWAYS",
			"HYDROGRAPHY.HYDROGRAPHY",
			"BUILDINGS.BUILDINGS",
			"GEOGRAPHICALNAMES.NAMES"
            ],

            layersOptions:{
			"TRANSPORTNETWORKS.ROADS":{visibility:true, opacity:0.3},
			"TRANSPORTNETWORKS.RAILWAYS":{visibility:true, opacity:0.3},
			"HYDROGRAPHY.HYDROGRAPHY":{visibility:true, opacity:0.5},
			"BUILDINGS.BUILDINGS":{visibility:true, opacity:0.5},
			"GEOGRAPHICALNAMES.NAMES":{visibility:true}
		   }
        }
	);
}

Window.onload= initialize ;
