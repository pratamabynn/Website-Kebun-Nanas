var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_EsriTopographic_1 = new ol.layer.Tile({
            'title': 'Esri Topographic',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_GoogleSatellite_2 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_EsriDarkGray_3 = new ol.layer.Tile({
            'title': 'Esri Dark Gray',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_EsriStreet_4 = new ol.layer.Tile({
            'title': 'Esri Street',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });

//Area Boundaries
var format_AreaBoundaries_5 = new ol.format.GeoJSON();
var features_AreaBoundaries_5 = format_AreaBoundaries_5.readFeatures(json_AreaBoundaries_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AreaBoundaries_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreaBoundaries_5.addFeatures(features_AreaBoundaries_5);
var lyr_AreaBoundaries_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AreaBoundaries_5, 
                style: style_AreaBoundaries_5,
                popuplayertitle: "Area Boundaries",
                interactive: false,
                title: '<img src="styles/legend/AreaBoundaries_5.png" /> <b>Batas Wilayah'
            });

//Soil Moisture
var format_Kuadran4_6 = new ol.format.GeoJSON();
var features_Kuadran4_6 = format_Kuadran4_6.readFeatures(json_Kuadran4_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kuadran4_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kuadran4_6.addFeatures(features_Kuadran4_6);
var lyr_Kuadran4_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kuadran4_6, 
                style: style_Kuadran4_6,
                popuplayertitle: "Kuadran 4",
                interactive: true,
    title: 'Kuadran 4<br />\
    <img src="styles/legend/Kuadran4_6_0.png" /> Kering (0 - 25)<br />\
    <img src="styles/legend/Kuadran4_6_1.png" /> Kurang Air (25 - 40)<br />\
    <img src="styles/legend/Kuadran4_6_2.png" /> Lembab (40 - 60)<br />\
    <img src="styles/legend/Kuadran4_6_3.png" /> Basah (60 - 75)<br />\
    <img src="styles/legend/Kuadran4_6_4.png" /> Sangat Basah (75 - 100)<br />'
        });
var format_Kuadran3_7 = new ol.format.GeoJSON();
var features_Kuadran3_7 = format_Kuadran3_7.readFeatures(json_Kuadran3_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kuadran3_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kuadran3_7.addFeatures(features_Kuadran3_7);
var lyr_Kuadran3_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kuadran3_7, 
                style: style_Kuadran3_7,
                popuplayertitle: "Kuadran 3",
                interactive: true,
    title: 'Kuadran 3<br />\
    <img src="styles/legend/Kuadran3_7_0.png" /> Kering (0 - 25)<br />\
    <img src="styles/legend/Kuadran3_7_1.png" /> Kurang Air (25 - 40)<br />\
    <img src="styles/legend/Kuadran3_7_2.png" /> Lembab (40 - 60)<br />\
    <img src="styles/legend/Kuadran3_7_3.png" /> Basah (60 - 75)<br />\
    <img src="styles/legend/Kuadran3_7_4.png" /> Sangat Basah (75 - 100)<br />'
        });
var format_Kuadran2_8 = new ol.format.GeoJSON();
var features_Kuadran2_8 = format_Kuadran2_8.readFeatures(json_Kuadran2_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kuadran2_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kuadran2_8.addFeatures(features_Kuadran2_8);
var lyr_Kuadran2_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kuadran2_8, 
                style: style_Kuadran2_8,
                popuplayertitle: "Kuadran 2",
                interactive: true,
    title: 'Kuadran 2<br />\
    <img src="styles/legend/Kuadran2_8_0.png" /> Kering (0 - 25)<br />\
    <img src="styles/legend/Kuadran2_8_1.png" /> Kurang Air (25 - 40)<br />\
    <img src="styles/legend/Kuadran2_8_2.png" /> Lembab (40 - 60)<br />\
    <img src="styles/legend/Kuadran2_8_3.png" /> Basah (60 - 75)<br />\
    <img src="styles/legend/Kuadran2_8_4.png" /> Sangat Basah (75 - 100)<br />'
        });
var format_Kuadran1_9 = new ol.format.GeoJSON();
var features_Kuadran1_9 = format_Kuadran1_9.readFeatures(json_Kuadran1_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kuadran1_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kuadran1_9.addFeatures(features_Kuadran1_9);
var lyr_Kuadran1_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kuadran1_9, 
                style: style_Kuadran1_9,
                popuplayertitle: "Kuadran 1",
                interactive: true,
    title: 'Kuadran 1<br />\
    <img src="styles/legend/Kuadran1_9_0.png" /> Kering (0 - 25)<br />\
    <img src="styles/legend/Kuadran1_9_1.png" /> Kurang Air (25 - 40)<br />\
    <img src="styles/legend/Kuadran1_9_2.png" /> Lembab (40 - 60)<br />\
    <img src="styles/legend/Kuadran1_9_3.png" /> Basah (60 - 75)<br />\
    <img src="styles/legend/Kuadran1_9_4.png" /> Sangat Basah (75 - 100)<br />'
        });

//Temperature
var format_Kuadran4_10 = new ol.format.GeoJSON();
var features_Kuadran4_10 = format_Kuadran4_10.readFeatures(json_Kuadran4_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kuadran4_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kuadran4_10.addFeatures(features_Kuadran4_10);
var lyr_Kuadran4_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kuadran4_10, 
                style: style_Kuadran4_10,
                popuplayertitle: "Kuadran 4",
                interactive: true,
    title: 'Kuadran 4<br />\
    <img src="styles/legend/Kuadran4_10_0.png" /> Sangat Dingin (-18 - 15)<br />\
    <img src="styles/legend/Kuadran4_10_1.png" /> Dingin (15 - 23)<br />\
    <img src="styles/legend/Kuadran4_10_2.png" /> Ideal (23 - 32)<br />\
    <img src="styles/legend/Kuadran4_10_3.png" /> Panas (32 - 38)<br />\
    <img src="styles/legend/Kuadran4_10_4.png" /> Sangat Panas (38 - 50)<br />'
        });
var format_Kuadran3_11 = new ol.format.GeoJSON();
var features_Kuadran3_11 = format_Kuadran3_11.readFeatures(json_Kuadran3_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kuadran3_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kuadran3_11.addFeatures(features_Kuadran3_11);
var lyr_Kuadran3_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kuadran3_11, 
                style: style_Kuadran3_11,
                popuplayertitle: "Kuadran 3",
                interactive: true,
    title: 'Kuadran 3<br />\
    <img src="styles/legend/Kuadran3_11_0.png" /> Sangat Dingin (-18 - 15)<br />\
    <img src="styles/legend/Kuadran3_11_1.png" /> Dingin (15 - 23)<br />\
    <img src="styles/legend/Kuadran3_11_2.png" /> Ideal (23 - 32)<br />\
    <img src="styles/legend/Kuadran3_11_3.png" /> Panas (32 - 38)<br />\
    <img src="styles/legend/Kuadran3_11_4.png" /> Sangat Panas (38 - 50)<br />'
        });
var format_Kuadran2_12 = new ol.format.GeoJSON();
var features_Kuadran2_12 = format_Kuadran2_12.readFeatures(json_Kuadran2_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kuadran2_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kuadran2_12.addFeatures(features_Kuadran2_12);
var lyr_Kuadran2_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kuadran2_12, 
                style: style_Kuadran2_12,
                popuplayertitle: "Kuadran 2",
                interactive: true,
    title: 'Kuadran 2<br />\
    <img src="styles/legend/Kuadran2_12_0.png" /> Sangat Dingin (-18 - 15)<br />\
    <img src="styles/legend/Kuadran2_12_1.png" /> Dingin (15 - 23)<br />\
    <img src="styles/legend/Kuadran2_12_2.png" /> Ideal (23 - 32)<br />\
    <img src="styles/legend/Kuadran2_12_3.png" /> Panas (32 - 38)<br />\
    <img src="styles/legend/Kuadran2_12_4.png" /> Sangat Panas (38 - 50)<br />'
        });
var format_Kuadran1_13 = new ol.format.GeoJSON();
var features_Kuadran1_13 = format_Kuadran1_13.readFeatures(json_Kuadran1_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kuadran1_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kuadran1_13.addFeatures(features_Kuadran1_13);
var lyr_Kuadran1_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kuadran1_13, 
                style: style_Kuadran1_13,
                popuplayertitle: "Kuadran 1",
                interactive: true,
    title: 'Kuadran 1<br />\
    <img src="styles/legend/Kuadran1_13_0.png" /> Sangat Dingin (-18 - 15)<br />\
    <img src="styles/legend/Kuadran1_13_1.png" /> Dingin (15 - 23)<br />\
    <img src="styles/legend/Kuadran1_13_2.png" /> Ideal (23 - 32)<br />\
    <img src="styles/legend/Kuadran1_13_3.png" /> Panas (32 - 38)<br />\
    <img src="styles/legend/Kuadran1_13_4.png" /> Sangat Panas (38 - 50)<br />'
        });

//Irigation
var format_Irigation_14 = new ol.format.GeoJSON();
var features_Irigation_14 = format_Irigation_14.readFeatures(json_Irigation_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Irigation_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Irigation_14.addFeatures(features_Irigation_14);
var lyr_Irigation_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Irigation_14, 
                style: style_Irigation_14,
                popuplayertitle: "Irigation",
                interactive: true,
    title: 'Irigasi<br />\
    <img src="styles/legend/Irigation_14_0.png" /> Sangat Kurang Air (0 - 30)<br />\
    <img src="styles/legend/Irigation_14_1.png" /> Kurang Air (30 - 50)<br />\
    <img src="styles/legend/Irigation_14_2.png" /> Sedang (50 - 70)<br />\
    <img src="styles/legend/Irigation_14_3.png" /> Lembab (70 - 85)<br />\
    <img src="styles/legend/Irigation_14_4.png" /> Jenuh Air (85 - 100)<br />'
        });

//Jalan
var format_JalanKebun_15 = new ol.format.GeoJSON();
var features_JalanKebun_15 = format_JalanKebun_15.readFeatures(json_JalanKebun_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanKebun_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanKebun_15.addFeatures(features_JalanKebun_15);
var lyr_JalanKebun_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanKebun_15, 
                style: style_JalanKebun_15,
                popuplayertitle: "Jalan Kebun",
                interactive: false,
                title: '<img src="styles/legend/JalanKebun_15.png" /> Jalan Kebun'
            });
var format_JalanUtama_16 = new ol.format.GeoJSON();
var features_JalanUtama_16 = format_JalanUtama_16.readFeatures(json_JalanUtama_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanUtama_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanUtama_16.addFeatures(features_JalanUtama_16);
var lyr_JalanUtama_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanUtama_16, 
                style: style_JalanUtama_16,
                popuplayertitle: "Jalan Utama",
                interactive: false,
                title: '<img src="styles/legend/JalanUtama_16.png" /> Jalan Utama'
            });
var format_JalanLintasTimurSumatra_17 = new ol.format.GeoJSON();
var features_JalanLintasTimurSumatra_17 = format_JalanLintasTimurSumatra_17.readFeatures(json_JalanLintasTimurSumatra_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanLintasTimurSumatra_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanLintasTimurSumatra_17.addFeatures(features_JalanLintasTimurSumatra_17);
var lyr_JalanLintasTimurSumatra_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanLintasTimurSumatra_17, 
                style: style_JalanLintasTimurSumatra_17,
                popuplayertitle: "Jalan Lintas Timur Sumatra",
                interactive: false,
                title: '<img src="styles/legend/JalanLintasTimurSumatra_17.png" /> Jalan Lintas Timur Sumatra'
            });

//
var format_Location_18 = new ol.format.GeoJSON();
var features_Location_18 = format_Location_18.readFeatures(json_Location_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Location_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Location_18.addFeatures(features_Location_18);
var lyr_Location_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Location_18, 
                style: style_Location_18,
                popuplayertitle: "Location",
                interactive: true,
                title: '<img src="styles/legend/Location_18.png" /> <b>Bangunan'
            });
var group_Street = new ol.layer.Group({
                                layers: [lyr_JalanKebun_15,lyr_JalanUtama_16,lyr_JalanLintasTimurSumatra_17,],
                                fold: "close",
                                title: '<img src="styles/legend/JalanLintasTimurSumatra_17.png" /> Jalan'});
var group_Irigation = new ol.layer.Group({
                                layers: [lyr_Irigation_14,],
                                fold: "close",
                                title: '<img src="styles/legend/Irigation_14_2.png" /> Irigasi'});                                
var group_Temperature = new ol.layer.Group({
                                layers: [lyr_Kuadran4_10,lyr_Kuadran3_11,lyr_Kuadran2_12,lyr_Kuadran1_13,],
                                fold: "close",
                                title: '<img src="styles/legend/Kuadran1_13_2.png" /> Suhu'});
var group_SoilMoisture = new ol.layer.Group({
                                layers: [lyr_Kuadran4_6,lyr_Kuadran3_7,lyr_Kuadran2_8,lyr_Kuadran1_9,],
                                fold: "close",
                                title: '<img src="styles/legend/Kuadran1_9_2.png" /> Kelembaban Tanah'});
var group_Basemap = new ol.layer.Group({
                                layers: [lyr_GoogleMaps_0,lyr_EsriTopographic_1,lyr_GoogleSatellite_2,lyr_EsriDarkGray_3,lyr_EsriStreet_4,],
                                fold: "close",
                                title: '<img src="styles/legend/Basemap_20.png" /> Basemap'});

lyr_GoogleMaps_0.setVisible(false);lyr_EsriTopographic_1.setVisible(false);lyr_GoogleSatellite_2.setVisible(true);lyr_EsriDarkGray_3.setVisible(false);lyr_EsriStreet_4.setVisible(false);lyr_AreaBoundaries_5.setVisible(true);lyr_Kuadran4_6.setVisible(false);lyr_Kuadran3_7.setVisible(false);lyr_Kuadran2_8.setVisible(false);lyr_Kuadran1_9.setVisible(false);lyr_Kuadran4_10.setVisible(false);lyr_Kuadran3_11.setVisible(false);lyr_Kuadran2_12.setVisible(false);lyr_Kuadran1_13.setVisible(false);lyr_Irigation_14.setVisible(false);lyr_JalanKebun_15.setVisible(false);lyr_JalanUtama_16.setVisible(false);lyr_JalanLintasTimurSumatra_17.setVisible(false);lyr_Location_18.setVisible(false);
var layersList = [group_Basemap,lyr_AreaBoundaries_5,group_SoilMoisture,group_Temperature,group_Irigation,group_Street,lyr_Location_18];
lyr_AreaBoundaries_5.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Kuadran4_6.set('fieldAliases', {'id': 'id', 'soil_nama zona': 'soil_nama zona', 'soil_nilai soil (%)': 'soil_nilai soil (%)', 'soil_interpretasi': 'soil_interpretasi', });
lyr_Kuadran3_7.set('fieldAliases', {'id': 'id', 'soil_nama zona': 'soil_nama zona', 'soil_nilai soil (%)': 'soil_nilai soil (%)', 'soil_interpretasi': 'soil_interpretasi', });
lyr_Kuadran2_8.set('fieldAliases', {'id': 'id', 'soil_nama zona': 'soil_nama zona', 'soil_nilai soil (%)': 'soil_nilai soil (%)', 'soil_interpretasi': 'soil_interpretasi', });
lyr_Kuadran1_9.set('fieldAliases', {'id': 'id', 'soil_nama zona': 'soil_nama zona', 'soil_nilai soil (%)': 'soil_nilai soil (%)', 'soil_interpretasi': 'soil_interpretasi', });
lyr_Kuadran4_10.set('fieldAliases', {'id': 'id', 'Temp_nama zona': 'Temp_nama zona', 'Temp_nilai temp (C)': 'Temp_nilai temp (C)', 'Temp_interpretasi': 'Temp_interpretasi', });
lyr_Kuadran3_11.set('fieldAliases', {'id': 'id', 'Temp_nama zona': 'Temp_nama zona', 'Temp_nilai temp (C)': 'Temp_nilai temp (C)', 'Temp_interpretasi': 'Temp_interpretasi', });
lyr_Kuadran2_12.set('fieldAliases', {'id': 'id', 'Temp_nama zona': 'Temp_nama zona', 'Temp_nilai temp (C)': 'Temp_nilai temp (C)', 'Temp_interpretasi': 'Temp_interpretasi', });
lyr_Kuadran1_13.set('fieldAliases', {'id': 'id', 'Temp_nama zona': 'Temp_nama zona', 'Temp_nilai temp (C)': 'Temp_nilai temp (C)', 'Temp_interpretasi': 'Temp_interpretasi', });
lyr_Irigation_14.set('fieldAliases', {'nama irigasi': 'nama irigasi', 'irigasi_id': 'irigasi_id', 'irigasi_nilai air (%)': 'irigasi_nilai air (%)', 'irigasi_interpretasi': 'irigasi_interpretasi', });
lyr_JalanKebun_15.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_JalanUtama_16.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_JalanLintasTimurSumatra_17.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Location_18.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'location_id': 'location_id', 'location_Kelurahan': 'location_Kelurahan', 'location_Kecamatan': 'location_Kecamatan', 'location_Kabupaten': 'location_Kabupaten', 'location_Provinsi': 'location_Provinsi', });
lyr_AreaBoundaries_5.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Kuadran4_6.set('fieldImages', {'id': 'TextEdit', 'soil_nama zona': 'TextEdit', 'soil_nilai soil (%)': 'Range', 'soil_interpretasi': 'TextEdit', });
lyr_Kuadran3_7.set('fieldImages', {'id': 'TextEdit', 'soil_nama zona': 'TextEdit', 'soil_nilai soil (%)': 'Range', 'soil_interpretasi': 'TextEdit', });
lyr_Kuadran2_8.set('fieldImages', {'id': 'TextEdit', 'soil_nama zona': 'TextEdit', 'soil_nilai soil (%)': 'Range', 'soil_interpretasi': 'TextEdit', });
lyr_Kuadran1_9.set('fieldImages', {'id': 'TextEdit', 'soil_nama zona': 'TextEdit', 'soil_nilai soil (%)': 'Range', 'soil_interpretasi': 'TextEdit', });
lyr_Kuadran4_10.set('fieldImages', {'id': 'TextEdit', 'Temp_nama zona': 'TextEdit', 'Temp_nilai temp (C)': 'Range', 'Temp_interpretasi': 'TextEdit', });
lyr_Kuadran3_11.set('fieldImages', {'id': 'TextEdit', 'Temp_nama zona': 'TextEdit', 'Temp_nilai temp (C)': 'Range', 'Temp_interpretasi': 'TextEdit', });
lyr_Kuadran2_12.set('fieldImages', {'id': 'TextEdit', 'Temp_nama zona': 'TextEdit', 'Temp_nilai temp (C)': 'Range', 'Temp_interpretasi': 'TextEdit', });
lyr_Kuadran1_13.set('fieldImages', {'id': 'TextEdit', 'Temp_nama zona': 'TextEdit', 'Temp_nilai temp (C)': 'Range', 'Temp_interpretasi': 'TextEdit', });
lyr_Irigation_14.set('fieldImages', {'nama irigasi': 'TextEdit', 'irigasi_id': 'TextEdit', 'irigasi_nilai air (%)': 'TextEdit', 'irigasi_interpretasi': 'TextEdit', });
lyr_JalanKebun_15.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_JalanUtama_16.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_JalanLintasTimurSumatra_17.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Location_18.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'location_id': 'TextEdit', 'location_Kelurahan': 'TextEdit', 'location_Kecamatan': 'TextEdit', 'location_Kabupaten': 'TextEdit', 'location_Provinsi': 'TextEdit', });
lyr_AreaBoundaries_5.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Kuadran4_6.set('fieldLabels', {'id': 'hidden field', 'soil_nama zona': 'no label', 'soil_nilai soil (%)': 'inline label - visible with data', 'soil_interpretasi': 'inline label - visible with data', });
lyr_Kuadran3_7.set('fieldLabels', {'id': 'hidden field', 'soil_nama zona': 'no label', 'soil_nilai soil (%)': 'inline label - visible with data', 'soil_interpretasi': 'inline label - visible with data', });
lyr_Kuadran2_8.set('fieldLabels', {'id': 'hidden field', 'soil_nama zona': 'no label', 'soil_nilai soil (%)': 'inline label - visible with data', 'soil_interpretasi': 'inline label - visible with data', });
lyr_Kuadran1_9.set('fieldLabels', {'id': 'hidden field', 'soil_nama zona': 'no label', 'soil_nilai soil (%)': 'inline label - visible with data', 'soil_interpretasi': 'inline label - visible with data', });
lyr_Kuadran4_10.set('fieldLabels', {'id': 'hidden field', 'Temp_nama zona': 'no label', 'Temp_nilai temp (C)': 'inline label - visible with data', 'Temp_interpretasi': 'inline label - visible with data', });
lyr_Kuadran3_11.set('fieldLabels', {'id': 'hidden field', 'Temp_nama zona': 'no label', 'Temp_nilai temp (C)': 'inline label - visible with data', 'Temp_interpretasi': 'inline label - visible with data', });
lyr_Kuadran2_12.set('fieldLabels', {'id': 'hidden field', 'Temp_nama zona': 'no label', 'Temp_nilai temp (C)': 'inline label - visible with data', 'Temp_interpretasi': 'inline label - visible with data', });
lyr_Kuadran1_13.set('fieldLabels', {'id': 'hidden field', 'Temp_nama zona': 'no label', 'Temp_nilai temp (C)': 'inline label - visible with data', 'Temp_interpretasi': 'inline label - visible with data', });
lyr_Irigation_14.set('fieldLabels', {'nama irigasi': 'no label', 'irigasi_id': 'hidden field', 'irigasi_nilai air (%)': 'inline label - visible with data', 'irigasi_interpretasi': 'inline label - visible with data', });
lyr_JalanKebun_15.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_JalanUtama_16.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_JalanLintasTimurSumatra_17.set('fieldLabels', {'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_Location_18.set('fieldLabels', {'Name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'location_id': 'hidden field', 'location_Kelurahan': 'no label', 'location_Kecamatan': 'no label', 'location_Kabupaten': 'no label', 'location_Provinsi': 'no label', });
lyr_Location_18.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});