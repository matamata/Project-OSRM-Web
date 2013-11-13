/*
This program is free software; you can redistribute it and/or modify
it under the terms of the GNU AFFERO General Public License as published by
the Free Software Foundation; either version 3 of the License, or
any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA  02111-1307  USA
or see http://www.gnu.org/licenses/agpl.txt.
*/

// OSRM localization
// [Malay language support]


OSRM.Localization["my"] = {
// own language
"CULTURE": "my",
"LANGUAGE": "Malay",
// gui
"GUI_START": "Mula",
"GUI_END": "Tamat",
"GUI_RESET": "&nbsp;&nbsp;Reset&nbsp;&nbsp;",
"GUI_ZOOM_ON_ROUTE": "Zoom pada arah tuju",
"GUI_ZOOM_ON_USER": "Zoom pada user",
"GUI_SEARCH": "&nbsp;&nbsp;Show&nbsp;&nbsp;",
"GUI_REVERSE": "Menyungsang",
"GUI_START_TOOLTIP": "Mulakan",
"GUI_END_TOOLTIP": "Masukkan Deatinasi",
"GUI_MAIN_WINDOW": "Jendela Utama",
"GUI_ZOOM_IN": "Zoom dekat",
"GUI_ZOOM_OUT": "Zoom jauh",
// config
"GUI_CONFIGURATION": "Configurasi",
"GUI_LANGUAGE": "Bahasa",
"GUI_UNITS": "Unit",
"GUI_KILOMETERS": "Kilometers",
"GUI_MILES": "Batu",
// abbreviations
"GUI_M": "m",
"GUI_KM": "km",
"GUI_MI": "mi",
"GUI_FT": "ft",
"GUI_H": "h",
"GUI_MIN": "min",
"GUI_S": "s",
// mapping
"GUI_MAPPING_TOOLS": "Alat Pemetaan",
"GUI_HIGHLIGHT_UNNAMED_ROADS": "Serlahkan jalan tak bernama",
"GUI_SHOW_PREVIOUS_ROUTES": "Paparkan arah tuju terdahulu",
"GUI_EXTERNAL_TOOLS": "Alatan Luaran:",
"OPEN_JOSM": "Editor",
"OPEN_OSMBUGS": "Nota",
"OPEN_JOSM_FAILED": "Zoom dekat untuk membuka editor OSM.",
"OPEN_OSMBUGS_FAILED": "Zoom dekat untuk tuli nota.",
// geocoder
"SEARCH_RESULTS": "Hasil Carian",
"FOUND_X_RESULTS": "keputusan %i ditemui",
"TIMED_OUT": "Timed Out",
"NO_RESULTS_FOUND": "Tiada keputusan ditemui",
"NO_RESULTS_FOUND_SOURCE": "Tiada keputusan ditemui",
"NO_RESULTS_FOUND_TARGET": "Tiada keputusan ditemui",
// routing
"ROUTE_DESCRIPTION": "Penerangan Arah Tuju",
"GET_LINK_TO_ROUTE": "Dapatkan Pautan",
"ROUTE_LINK": "Pautan Arah Tuju",
"GENERATE_LINK_TO_ROUTE": "menanti pautan",
"LINK_TO_ROUTE_TIMEOUT": "tidak terdapat",
"GPX_FILE": "Fail GPX",
"DISTANCE": "Jarak",
"DURATION": "Tempoh",
"YOUR_ROUTE_IS_BEING_COMPUTED": "Laluan anda sedang dikira",
"NO_ROUTE_FOUND": "Tiada laluan yang terdapat",
// printing
"OVERVIEW_MAP": "Gambaran Peta",
"NO_ROUTE_SELECTED": "Tiada Laluan Di Pilih,
// routing engines
"ENGINE_0": "Kenderaan (Kelajuan)",
// tile server names
// (only required if names are different to OSRM.config)
//"TILE_SERVER_0": "osm.org",
//"TILE_SERVER_1": "osm.de",
//"TILE_SERVER_2": "MapQuest",
//"TILE_SERVER_3": "MapBox Terrain",
//"TILE_SERVER_4": "MapBox Labelled Satellite",
//"TILE_SERVER_5": "MapBox Satellite",
// overlay server names
//(only required if names are different to OSRM.config)
//"OVERLAY_SERVER_0": "Small Components",
// directions
"N": "utara",
"E": "timur",
"S": "selatan",
"W": "barat",
"NE": "timur laut",
"SE": "tenggara",
"SW": "barat daya",
"NW": "barat laut",
// driving directions
// %s: road name
// %d: direction
// [*]: will only be printed when there actually is a road name
"DIRECTION_0":"Arah tidak diketahui[ onto <b>%s</b>]",
"DIRECTION_1":"Teruskan [ ke <b>%s</b>]",
"DIRECTION_2":"Belok kanan sedikit[ ke <b>%s</b>]",
"DIRECTION_3":"Belok kanan[ ke <b>%s</b>]",
"DIRECTION_4":"Belok kanan tajam[ ke <b>%s</b>]",
"DIRECTION_5":"Pusing-U[ ke <b>%s</b>]",
"DIRECTION_6":"Belok kiri tajam[ ke <b>%s</b>]",
"DIRECTION_7":"Belok kiri[ ke <b>%s</b>]",
"DIRECTION_8":"Belok sedikit ke kiri[ ke <b>%s</b>]",
"DIRECTION_10":"Teruskan <b>%d</b>[ ke <b>%s</b>]",
"DIRECTION_11-1":"Masuk bulatan dan keluar pada exit pertama[ ke <b>%s</b>]",
"DIRECTION_11-2":"Masuk bulatan dan keluar pada exit kedua[ ke <b>%s</b>]",
"DIRECTION_11-3":"Masuk bulatan dan keluar pada exit ketiga[ ke <b>%s</b>]",
"DIRECTION_11-4":"Masuk bulatan dan keluar pada exit keempat[ ke <b>%s</b>]",
"DIRECTION_11-5":"Masuk bulatan dan keluar pada exit keenam[ ke <b>%s</b>]",
"DIRECTION_11-6":"Masuk bulatan dan keluar pada exit ketujuh[ ke <b>%s</b>]",
"DIRECTION_11-7":"Masuk bulatan dan keluar pada exit kelapan[ ke <b>%s</b>]",
"DIRECTION_11-8":"Masuk bulatan dan keluar pada exit kesembilan[ ke <b>%s</b>]",
"DIRECTION_11-9":"Masuk bulatan dan keluar pada exit kesepuluh[ ke <b>%s</b>]",
"DIRECTION_11-x":"Masuk bulatan dan keluar pada exit kesebelas[ ke <b>%s</b>]",
"DIRECTION_15":"Anda telah sampai ke destinasi anda",
// notifications
"NOTIFICATION_MAINTENANCE_HEADER":	"Penyelenggaraan Berjadual",
"NOTIFICATION_MAINTENANCE_BODY":	"Laman Web OSRM sedang dalam penyelenggaraan yang dijadualkan. " + 
									"Harap bersabar sementara kemas kini yang diperlukan dilakukan. " +
									"Laman web ini akan kembali dalam talian tidak lama." +
									"<br/><br/>" + 
									"Sementara itu, anda mungkin mahu mencari peta dekat dengan kejiranan berhampiran anda ..." + 
									"<br/><br/><br/>[OSRM]",
"NOTIFICATION_LOCALIZATION_HEADER":	"Adakah anda tahu? Anda boleh menukar bahasa paparan.",
"NOTIFICATION_LOCALIZATION_BODY":	"Anda boleh menggunakan menu tarik turun di sudut kiri atas untuk memilih bahasa kegemaran anda. " +
									"<br/><br/>" +
									"Jangan berputus asa jika anda tidak dapat mencari bahasa pilihan anda. " +
									"Jika anda mahu, anda boleh membantu untuk menyediakan terjemahan tambahan! " +
									"Layari <a href='https://github.com/DennisSchiefer/Project-OSRM-Web'>here</a> untuk keterangan lanjut.",
"NOTIFICATION_CLICKING_HEADER":		"Tahukah Anda? Anda boleh klik pada peta untuk menetapkan penanda laluan.",
"NOTIFICATION_CLICKING_BODY":		"Anda boleh klik pada peta dengan butang kiri tetikus untuk menetapkan penanda sumber (hijau) atau penanda sasaran (merah), " +
									"jika penanda sumber sudah wujud. " +
									"Alamat lokasi yang dipilih akan dipaparkan dalam kotak di sebelah kiri. " + 
									"<br/><br/>" +
									"Anda boleh memadam penanda dengan klik pada sekali lagi dengan butang kiri tetikus.",
"NOTIFICATION_DRAGGING_HEADER":		"Adakah anda tahu? Anda boleh menyeret penanda setiap laluan pada peta.",
"NOTIFICATION_DRAGGING_BODY":		"Anda boleh menyeret penanda dengan klik pada dengan butang tetikus kiri dan memegang butang ditekan. " +
									"Kemudian anda boleh bergerak di sekitar penanda peta dan laluan akan dikemaskini serta-merta. " +
									"<br/><br/>" +
									"Anda juga boleh membuat penanda perantaraan dengan mengheret mereka jauh daripada laluan utama! ",
// do not translate below this line
"GUI_LEGAL_NOTICE": "Routing by <a href='http://project-osrm.org/'>Project OSRM</a> - Geocoder by <a href='http://wiki.openstreetmap.org/wiki/Nominatim'>Nominatim</a> - OSRM hosting by <a href='http://algo2.iti.kit.edu/'>KIT</a>",
"GUI_DATA_TIMESTAMP": "data: ",
"GUI_VERSION": "gui: ",
"QR": "QR"
};

// set GUI language on load
if( OSRM.DEFAULTS.LANUGAGE_ONDEMAND_RELOADING == true )
	OSRM.Localization.setLanguage("my", true);
