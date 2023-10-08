// var latitud;
// var longitud;
// var radio = 20_000;

// if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(function(position) {
//         latitud = position.coords.latitude;
//         longitud = position.coords.longitude;
 
//         console.log("Ubicación obtenida:", "Latitud: " + latitud + ", Longitud: " + longitud);

//         // Construir la URL de la solicitud a Overpass API
//         const overpassUrl = `http://overpass-api.de/api/interpreter?data=[out:json];(node["natural"="water"](around:${radio},${latitud},${longitud});way["natural"="water"](around:${radio},${latitud},${longitud});relation["natural"="water"](around:${radio},${latitud},${longitud}););out body;>;out skel qt;`;

//         // Realizar la solicitud usando fetch()
//         fetch(overpassUrl)
//           .then(response => {
//             if (!response.ok) {
//               throw new Error(`HTTP error! Status: ${response.status}`);
//             }
//             return response.json();
//           })
//           .then(data => {
//             // Manipular la respuesta de la API aquí
//             // console.log("Nodos:", cuerposDeAguaNode(data.elements));
//             // console.log("Way:", cuerposDeAguaWay(data.elements));}
//             // let primerWay = cuerposDeAguaWay(data.elements);
//             // console.log(primerWay);
//             // console.log("Coordenadas de nodos que contiene el way:", encontrarTodosNodosDelWay( primerWay, cuerposDeAguaNode(data.elements)));
//             // console.log(cuerposDeAguaWay(data.elements));
//             let ways = cuerposDeAguaWay(data.elements)
//             let nodes = cuerposDeAguaNode(data.elements)

//             let cuerposDeAgua = coordenadasWay(ways, nodes)
//             // console.log(ways);
//             console.log(cuerposDeAgua )

//             console.log(mapaCuerposDeAgua(cuerposDeAgua));


            
//           })
//           .catch(error => {
//             console.error("Error al obtener cuerpos de agua:", error.message);
//           });
//         // Aquí puedes realizar acciones adicionales con la ubicación obtenida
//     }, function(error) {
//         console.error("Error al obtener la ubicación:", error.message);
//     });

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

      // const waterQualityApiUrl = `https://api.openwaterdata.org/v1/measurements?latitude=${latitud}&longitude=${longitud}`;

      // // Realizar la solicitud usando fetch()
      // fetch(waterQualityApiUrl)
      //   .then(response => {
      //     if (!response.ok) {
      //       throw new Error(`HTTP error! Status: ${response.status}`);
      //     }
      //     return response.json();
      //   })
      //   .then(data => {
      //     // Manipular la respuesta de la API aquí
      //     console.log("Datos de calidad del agua:", data);
      //   })
      //   .catch(error => {
      //     console.error("Error al obtener datos de calidad del agua:", error.message);
      //   });
// } else {
//     console.error("Geolocalización no es compatible en este navegador");
// }


// function cuerposDeAguaWay(listaCuerposDeAgua){
//   return listaCuerposDeAgua.filter(cuerpoDeAgua => {
//     if (cuerpoDeAgua.type == "way") return cuerpoDeAgua
//   })
// }
// function cuerposDeAguaNode(listaCuerposDeAgua){
//   return listaCuerposDeAgua.filter(cuerpoDeAgua => {
//     if (cuerpoDeAgua.type == "node") return cuerpoDeAgua
//   })
// }
// function encontrarTodosNodosDelWay(way, nodos) {
//   let idListaNodosDeWay = way.nodes;
//   let nodosEncontrados = [];

//   for (let idNodoBuscado of idListaNodosDeWay) {
//     for (let nodo of nodos) {
//       if (nodo.id === idNodoBuscado) {
//         nodosEncontrados.push(nodo);
//         break;
//       }
//     }
//   }

//   return nodosEncontrados;
// }

// function coordenadasWay(ways, nodos){
//   return ways.map(way => {
//     let cuerpoDeAgua =  encontrarTodosNodosDelWay(way, nodos)[0];
//     cuerpoDeAgua.nombre = way?.tags?.name || null;
//     cuerpoDeAgua.type = way?.tags?.water || null;    
//     return cuerpoDeAgua
//   })
// }
// function mapaCuerposDeAgua(cuerposDeAgua){
//   return cuerposDeAgua.map(cuerpoDeAgua => {
//     // window.open(`https://www.google.com/maps?q=${cuerpoDeAgua.lat},${cuerpoDeAgua.lon}`, '_blank')
//     // console.log(`https://www.google.com/maps?q=${cuerpoDeAgua.lat},${cuerpoDeAgua.lon}`);
//     return `https://www.google.com/maps?q=${cuerpoDeAgua.lat},${cuerpoDeAgua.lon}`
//   })
// }
//21.171506, -101.676745

//////////////////////////////////////////////////////////////////////////////////////////////////////////

// Construir la URL de la solicitud a la Water Quality API






// const latitudd = 21.16579310700708; // Ejemplo: Nueva York
// const longitudd = -101.71193375502069;

// // Construir la URL de la solicitud a la WAQI API
// const waqiApiUrl = `https://api.waqi.info/feed/geo:${latitudd};${longitudd}/?token=demo`;

// // Realizar la solicitud usando fetch()
// fetch(waqiApiUrl)
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then(data => {
//     // Manipular la respuesta de la API aquí
//     console.log("Datos de calidad del agua:", data);
//   })
//   .catch(error => {
//     console.error("Error al obtener datos de calidad del agua:", error.message);
//   });

[
  {
    cuidad: "León",
    nombre: "Rio turbio-estancia de vaqueros",
    tipo: "lótico",
    latitud: 21.06217,
    longitud: -101.76118,
    parametros: {
      demandaBioquimicaOxigeno: 105.5,
      calidadDBO: "Contaminada",
      demandaQuimicaOxigeno: 1190,
      calidadDQO: "Fuertemente contaminada",
      solidosSuspendidosTotales: 239.5,
      calidadSST: "Contaminado",
      semaforo: "Rojo",
      contaminantes: "DBO, DQO, SST, CF_E_COLI, OD%L, TOX_L",
    },
    linkDeGoogleMaps: "https://www.google.com/maps?q=21.06217,-101.76118"
  },
  {
    cuidad: "León",
    nombre: "Arrollo hondo",
    tipo: "lótico",
    latitud: 21.08019,
    longitud: -101.73097,
    parametros: {
      demandaBioquimicaOxigeno: 213.75,
      calidadDBO: "Fuertemente contaminada",
      demandaQuimicaOxigeno: 3253.75,
      calidadDQO: "Fuertemente contaminada",
      solidosSuspendidosTotales: 1207,
      calidadSST: "Fuertemente contaminada",
      semaforo: "Rojo",
      contaminantes: "DBO, DQO, SST, CF_E_COLI, OD%L, TOX_L",
    },
    linkDeGoogleMaps: "https://www.google.com/maps?q=21.08019,-101.73097"
  },
  {
    cuidad: "León",
    nombre: "Arrollo las mulas",
    tipo: "lótico",
    latitud: 21.08511,
    longitud: -101.73049,
    parametros: {
      demandaBioquimicaOxigeno: 106,
      calidadDBO: "Contaminada",
      demandaQuimicaOxigeno: 931.5,
      calidadDQO: "Fuertemente contaminada",
      solidosSuspendidosTotales: 178.8,
      calidadSST: "Contaminado",
      semaforo: "Rojo",
      contaminantes: "DBO, DQO, SST, CF, E_COLI, OD%L",
    },
    linkDeGoogleMaps: "https://www.google.com/maps?q=21.08511,-101.73049"
  },
  {
    cuidad: "León",
    nombre: "Aguas arriba",
    tipo: "lótico",
    latitud: 21.09266,
    longitud: -101.73346,
    parametros: {
      demandaBioquimicaOxigeno: 94,
      calidadDBO: "Contaminada",
      demandaQuimicaOxigeno: 152.26,
      calidadDQO: "Contaminada",
      solidosSuspendidosTotales: 27.7,
      calidadSST: "Buena calidad",
      semaforo: "Rojo",
      contaminantes: "DBO, DQO, CF, E_COLI",
    },
    linkDeGoogleMaps: "https://www.google.com/maps?q=21.09266,-101.73346"
  },
  {
    cuidad: "León",
    nombre: "Aguas abajo",
    tipo: "lótico",
    latitud: 21.08193,
    longitud: -101.72978,
    parametros: {
      demandaBioquimicaOxigeno: 134,
      calidadDBO: "Fuertemente contaminada",
      demandaQuimicaOxigeno: 1731.5,
      calidadDQO: "Fuertemente contaminada",
      solidosSuspendidosTotales: 479,
      calidadSST: "Fuertemente contaminado",
      semaforo: "Rojo",
      contaminantes: "DBO, DQO, SST, CF_E_COLI, OD%L, TOX_L",
    },
    linkDeGoogleMaps: "https://www.google.com/maps?q=21.08193,-101.72978"
  }
]
