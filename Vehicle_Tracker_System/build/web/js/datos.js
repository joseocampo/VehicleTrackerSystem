var objects_brands = {"vehicles": [
        {},
        {"brand": "Toyota", "models": [{"name": "Auris"}, {"name": "Avenis"}, {"name": "Aygo"}, {"name": "C-HR"}, {"name": "Corolla"}, {"name": "GT86"}, {"name": "Hilux"}, {"name": "Land Cruiser"}, {"name": "Prius"}, {"name": "ProAce"}, {"name": "RAV4"}, {"name": "Supra"}, {"name": "Verso"}, {"name": "Yaris"}, {"name": "Otro"}]},
        {"brand": "Nissan", "models": [{"name": "370Z"}, {"name": "Evalia"}, {"name": "GT-R"}, {"name": "Juke"}, {"name": "Leaf"}, {"name": "Micra"}, {"name": "Navara"}, {"name": "NV300"}, {"name": "Pulsar"}, {"name": "Qashqai"}, {"name": "X-Trail"}, {"name": "Otro"}]},
        {"brand": "Honda", "models": [{"name": "Honda1"}, {"name": "Honda3"}, {"name": "Honda3"}, {"name": "Otro"}]},
        {"brand": "Ford", "models": [{"name": "Ford1"}, {"name": "Ford2"}, {"name": "Ford3"}, {"name": "Otro"}]},
        {"brand": "Kia", "models": [{"name": "Ford"}, {"name": "Corolla"}, {"name": "Prado"}, {"name": "Otro"}]},
        {"brand": "Mercedes Benz", "models": [{"name": "Centra"}, {"name": "BMW"}, {"name": "Fiat"}, {"name": "Otro"}]},
        {"brand": "BMW", "models": [{"name": "Honda1"}, {"name": "Honda3"}, {"name": "Honda3"}, {"name": "Otro"}]},
        {"brand": "Porsche", "models": [{"name": "Ford1"}, {"name": "Ford2"}, {"name": "Ford3"}, {"name": "Otro"}]},
        {"brand": "Chevrolet", "models": [{"name": "Ford"}, {"name": "Corolla"}, {"name": "Prado"}, {"name": "Otro"}]},
        {"brand": "Lexus", "models": [{"name": "Centra"}, {"name": "BMW"}, {"name": "Fiat"}, {"name": "Otro"}]},
        {"brand": "Mazda", "models": [{"name": "Honda1"}, {"name": "Honda3"}, {"name": "Honda3"}, {"name": "Otro"}]},
        {"brand": "Land Rover", "models": [{"name": "Ford1"}, {"name": "Ford2"}, {"name": "Ford3"}, {"name": "Otro"}]},
        {"brand": "Mitsubishi", "models": [{"name": "Montero"}, {"name": "Eclipse Cross"}, {"name": "i-MIEV"}, {"name": "L200"}, {"name": "ASX"}, {"name": "Outlander"}, {"name": "Sapce Star"}, {"name": "Otro"}]},
        {"brand": "Mini", "models": [{"name": "Centra"}, {"name": "BMW"}, {"name": "Fiat"}, {"name": "Otro"}]},
        {"brand": "Hummer", "models": [{"name": "Honda1"}, {"name": "Honda3"}, {"name": "Honda3"}, {"name": "Otro"}]},
        {"brand": "Hyundai", "models": [{"name": "Elantra"}, {"name": "Genesis"}, {"name": "Grant Santa Fe"}, {"name": "i10"}, {"name": "i20"}, {"name": "i30"}, {"name": "i40"}, {"name": "Ioniq"}, {"name": "ix20"}, {"name": "Kona"}, {"name": "Nexo"}, {"name": "Palisade"}, {"name": "Santa Fe"}, {"name": "Tucson"}, {"name": "Veloster"}, {"name": "Otro"}]},
        {"brand": "Acura", "models": [{"name": "Ford"}, {"name": "Corolla"}, {"name": "Prado"}, {"name": "Otro"}]},
        {"brand": "Peugeot", "models": [{"name": "Centra"}, {"name": "BMW"}, {"name": "Fiat"}, {"name": "Otro"}]},
        {"brand": "Pegani", "models": [{"name": "Honda1"}, {"name": "Honda3"}, {"name": "Honda3"}, {"name": "Otro"}]},
        {"brand": "Bodge", "models": [{"name": "Ford1"}, {"name": "Ford2"}, {"name": "Ford3"}, {"name": "Otro"}]},
        {"brand": "Jeep", "models": [{"name": "Ford"}, {"name": "Corolla"}, {"name": "Prado"}, {"name": "Otro"}]},
        {"brand": "Alfa Romeo", "models": [{"name": "Centra"}, {"name": "BMW"}, {"name": "Fiat"}, {"name": "Otro"}]},
        {"brand": "Shelby", "models": [{"name": "Honda1"}, {"name": "Honda3"}, {"name": "Honda3"}, {"name": "Otro"}]},
        {"brand": "Subaru", "models": [{"name": "Ford1"}, {"name": "Ford2"}, {"name": "Ford3"}, {"name": "Otro"}]},
        {"brand": "Seat", "models": [{"name": "Ford"}, {"name": "Corolla"}, {"name": "Prado"}, {"name": "Otro"}]},
        {"brand": "Lotus", "models": [{"name": "Centra"}, {"name": "BMW"}, {"name": "Fiat"}, {"name": "Otro"}]},
        {"brand": "Citroen", "models": [{"name": "Honda1"}, {"name": "Honda3"}, {"name": "Honda3"}, {"name": "Otro"}]},
        {"brand": "Suzuki", "models": [{"name": "Ford1"}, {"name": "Ford2"}, {"name": "Ford3"}, {"name": "Otro"}]},
        {"brand": "Fiat", "models": [{"name": "Ford"}, {"name": "Corolla"}, {"name": "Prado"}, {"name": "Otro"}]},
        {"brand": "Opel", "models": [{"name": "Centra"}, {"name": "BMW"}, {"name": "Fiat"}, {"name": "Otro"}]},
        {"brand": "Daewoo", "models": [{"name": "Honda1"}, {"name": "Honda3"}, {"name": "Honda3"}, {"name": "Otro"}]},
        {"brand": "Crysler", "models": [{"name": "Ford1"}, {"name": "Ford2"}, {"name": "Ford3"}, {"name": "Otro"}]},
        {"brand": "Lincoln", "models": [{"name": "Ford"}, {"name": "Corolla"}, {"name": "Prado"}, {"name": "Otro"}]},
        {"brand": "Skoda", "models": [{"name": "Centra"}, {"name": "BMW"}, {"name": "Fiat"}, {"name": "Otro"}]},
        {"brand": "Saleen", "models": [{"name": "Honda1"}, {"name": "Honda3"}, {"name": "Honda3"}, {"name": "Otro"}]},
        {"brand": "Pontiac", "models": [{"name": "Ford1"}, {"name": "Ford2"}, {"name": "Ford3"}, {"name": "Otro"}]},
        {"brand": "GMC", "models": [{"name": "Ford"}, {"name": "Corolla"}, {"name": "Prado"}, {"name": "Otro"}]},
        {"brand": "Isuzu", "models": [{"name": "Centra"}, {"name": "BMW"}, {"name": "Fiat"}, {"name": "Otro"}]},
        {"brand": "Ssang Yong", "models": [{"name": "Honda1"}, {"name": "Honda3"}, {"name": "Honda3"}, {"name": "Otro"}]},
        {"brand": "Buick", "models": [{"name": "Ford1"}, {"name": "Ford2"}, {"name": "Ford3"}, {"name": "Otro"}]},
        {"brand": "Delorean", "models": [{"name": "Ford"}, {"name": "Corolla"}, {"name": "Prado"}, {"name": "Otro"}]},
        {"brand": "Chery", "models": [{"name": "Centra"}, {"name": "BMW"}, {"name": "Fiat"}, {"name": "Otro"}]},
        {"brand": "Plymouth", "models": [{"name": "Honda1"}, {"name": "Honda3"}, {"name": "Honda3"}, {"name": "Otro"}]},
        {"brand": "Mercury", "models": [{"name": "Ford1"}, {"name": "Ford2"}, {"name": "Ford3"}, {"name": "Otro"}]},
        {"brand": "Saturn", "models": [{"name": "Ford"}, {"name": "Corolla"}, {"name": "Prado"}, {"name": "Otro"}]},
        {"brand": "Lamborghini", "models": [{"name": "Centra"}, {"name": "BMW"}, {"name": "Fiat"}, {"name": "Otro"}]},
        {"brand": "Ferrari", "models": [{"name": "Honda1"}, {"name": "Honda3"}, {"name": "Honda3"}, {"name": "Otro"}]},
        {"brand": "Audi", "models": [{"name": "Ford1"}, {"name": "Ford2"}, {"name": "Ford3"}, {"name": "Otro"}]},
        {"brand": "Bugatti", "models": [{"name": "Ford"}, {"name": "Corolla"}, {"name": "Prado"}, {"name": "Otro"}]},
        {"brand": "Volkswagen", "models": [{"name": "Centra"}, {"name": "BMW"}, {"name": "Fiat"}, {"name": "Otro"}]},
        {"brand": "Aston Martin", "models": [{"name": "Honda1"}, {"name": "Honda3"}, {"name": "Honda3"}, {"name": "Otro"}]},
        {"brand": "Maserati", "models": [{"name": "Ford1"}, {"name": "Ford2"}, {"name": "Ford3"}, {"name": "Otro"}]},
        {"brand": "Jaguar", "models": [{"name": "Ford"}, {"name": "Corolla"}, {"name": "Prado"}, {"name": "Otro"}]},
        {"brand": "Rolls Royce", "models": [{"name": "Centra"}, {"name": "BMW"}, {"name": "Fiat"}, {"name": "Otro"}]},
        {"brand": "Bentley", "models": [{"name": "Honda1"}, {"name": "Honda3"}, {"name": "Honda3"}, {"name": "Otro"}]},
        {"brand": "Volvo", "models": [{"name": "Ford1"}, {"name": "Ford2"}, {"name": "Ford3"}, {"name": "Otro"}]},
        {"brand": "Mclaren", "models": [{"name": "Ford"}, {"name": "Corolla"}, {"name": "Prado"}, {"name": "Otro"}]},
        {"brand": "Cadillac", "models": [{"name": "Centra"}, {"name": "BMW"}, {"name": "Fiat"}, {"name": "Otro"}]},
        {"brand": "Renault", "models": [{"name": "Honda1"}, {"name": "Honda3"}, {"name": "Honda3"}, {"name": "Otro"}]},
        {"brand": "Shelby", "models": [{"name": "Ford1"}, {"name": "Ford2"}, {"name": "Ford3"}, {"name": "Otro"}]},
        {"brand": "Opel", "models": [{"name": "Centra"}, {"name": "BMW"}, {"name": "Fiat"}, {"name": "Otro"}]},
        {"brand": "Koennigsegg", "models": [{"name": "Honda1"}, {"name": "Honda3"}, {"name": "Honda3"}, {"name": "Otro"}]},
        {"brand": "Dacia", "models": [{"name": "Honda1"}, {"name": "Honda3"}, {"name": "Honda3"}, {"name": "Otro"}]},
        {"brand": "Daihatsu", "models": [{"name": "Honda1"}, {"name": "Honda3"}, {"name": "Honda3"}, {"name": "Otro"}]},
        {"brand": "Datsun", "models": [{"name": "Honda1"}, {"name": "Honda3"}, {"name": "Honda3"}, {"name": "Otro"}]},
        {"brand": "Encava", "models": [{"name": "Honda1"}, {"name": "Honda3"}, {"name": "Honda3"}, {"name": "Otro"}]},
        {"brand": "Faw", "models": [{"name": "Honda1"}, {"name": "Honda3"}, {"name": "Honda3"}, {"name": "Otro"}]},
        {"brand": "Fisker", "models": [{"name": "Honda1"}, {"name": "Honda3"}, {"name": "Honda3"}, {"name": "Otro"}]},
        {"brand": "Force Motors", "models": [{"name": "Honda1"}, {"name": "Honda3"}, {"name": "Honda3"}, {"name": "Otro"}]},
        {"brand": "Freightliner", "models": [{"name": "Honda1"}, {"name": "Honda3"}, {"name": "Honda3"}, {"name": "Otro"}]},
        {"brand": "Geely", "models": [{"name": "Honda1"}, {"name": "Honda3"}, {"name": "Honda3"}, {"name": "Otro"}]},
        {"brand": "GM", "models": [{"name": "Honda1"}, {"name": "Honda3"}, {"name": "Honda3"}, {"name": "Otro"}]},
        {"brand": "Great wall", "models": [{"name": "Honda1"}, {"name": "Honda3"}, {"name": "Honda3"}, {"name": "Otro"}]},
        {"brand": "Hafei", "models": [{"name": "Honda1"}, {"name": "Honda3"}, {"name": "Honda3"}, {"name": "Otro"}]},
        {"brand": "HSV", "models": [{"name": "Honda1"}, {"name": "Honda3"}, {"name": "Honda3"}, {"name": "Otro"}]},
        {"brand": "Infiniti", "models": [{"name": "Honda1"}, {"name": "Honda3"}, {"name": "Honda3"}, {"name": "Otro"}]},
        {"brand": "Innocenti", "models": [{"name": "Honda1"}, {"name": "Honda3"}, {"name": "Honda3"}, {"name": "Otro"}]},
        {"brand": "International MXT", "models": [{"name": "Honda1"}, {"name": "Honda3"}, {"name": "Honda3"}, {"name": "Otro"}]},
        {"brand": "Iveco", "models": [{"name": "Honda1"}, {"name": "Honda3"}, {"name": "Honda3"}, {"name": "Otro"}]},
        {"brand": "IZH", "models": [{"name": "Honda1"}, {"name": "Honda3"}, {"name": "Honda3"}, {"name": "Otro"}]},
        {"brand": "Jac Motors", "models": [{"name": "Honda1"}, {"name": "Honda3"}, {"name": "Honda3"}, {"name": "Otro"}]},
        {"brand": "Jmc", "models": [{"name": "Honda1"}, {"name": "Honda3"}, {"name": "Honda3"}, {"name": "Otro"}]},
        {"brand": "Kenworth", "models": [{"name": "Honda1"}, {"name": "Honda3"}, {"name": "Honda3"}, {"name": "Otro"}]},
        {"brand": "Landwind", "models": [{"name": "Honda1"}, {"name": "Honda3"}, {"name": "Honda3"}, {"name": "Otro"}]},
        {"brand": "Laraki", "models": [{"name": "Honda1"}, {"name": "Honda3"}, {"name": "Honda3"}, {"name": "Otro"}]},
        {"brand": "Lifan", "models": [{"name": "Honda1"}, {"name": "Honda3"}, {"name": "Honda3"}, {"name": "Otro"}]},
        {"brand": "Mahindra", "models": [{"name": "Honda1"}, {"name": "Honda3"}, {"name": "Honda3"}, {"name": "Otro"}]},
        {"brand": "MAN", "models": [{"name": "Honda1"}, {"name": "Honda3"}, {"name": "Honda3"}, {"name": "Otro"}]},
        {"brand": "Mercury", "models": [{"name": "Honda1"}, {"name": "Honda3"}, {"name": "Honda3"}, {"name": "Otro"}]},
        {"brand": "Peterbilt", "models": [{"name": "Honda1"}, {"name": "Honda3"}, {"name": "Honda3"}, {"name": "Otro"}]},
        {"brand": "Proton", "models": [{"name": "Honda1"}, {"name": "Honda3"}, {"name": "Honda3"}, {"name": "Otro"}]},
        {"brand": "Smart", "models": [{"name": "Honda1"}, {"name": "Honda3"}, {"name": "Honda3"}, {"name": "Otro"}]},
        {"brand": "TATA", "models": [{"name": "Honda1"}, {"name": "Honda3"}, {"name": "Honda3"}, {"name": "Otro"}]},
        {"brand": "Tesla", "models": [{"name": "Honda1"}, {"name": "Honda3"}, {"name": "Honda3"}, {"name": "Otro"}]},
        {"brand": "Otro", "models": [{"name": "Otro"}]}
    ]
};

var objects_areas = {"areas": [
        {}
        , {"name": "Consejo Municipal"}
        , {"name": "Secretaria de Consejo"}
        , {"name": "Asesoría Legal"}
        , {"name": "Unidad Fiscalización de Obras Privadas"}
        , {"name": "Planificación"}
        , {"name": "Servicios Privados"}
        , {"name": "Proveeduría"}
        , {"name": "Recursos Humanos"}
        , {"name": "Tecnología de la Información"}
        , {"name": "Dirección de Hacienda Municipal"}
        , {"name": "Gestión de Cobro"}
        , {"name": "Contabilidad"}
        , {"name": "Valoración de Bienes Inmuebles"}
        , {"name": "Tesorería"}
        , {"name": "Plataforma de Servicios Públicos"}
        , {"name": "Desarrollo Social de Inversiones"}
        , {"name": "Policía Municipal"}
        , {"name": "Archivo Central"}
        , {"name": "Gestión Ambiental"}
        , {"name": "Urgencias Municipales"}
        , {"name": "Centro de Cultura"}
        , {"name": "CECUM"}
    ]
};