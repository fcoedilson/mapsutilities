function mostraEndereco(){
		var endereco = document.getElementById("endereco").value;
		if ( geocoder ) {
			geocoder.getLatLng(endereco, 
				function(point){ 
					if ( !point ) {
						alert(endereco + " não encontrado");
					} else {
						map.setCenter(point, 13);
						var marca = new GMarker(point);
						map.addOverlay(marca);
						marca.openInfoWindowHtml( endereco + "<br />" + point.toString() );
					}
				} 
			);
		} else {
			alert("GeoCoder não identificado");
		}
}