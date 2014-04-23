function catchEnter(e){
	var characterCode
	if(e && e.which){
		e = e
		characterCode = e.which
	} else {
		e = event
		characterCode = e.keyCode
	}
	if(characterCode == 13){
		document.getElementById('cardid').focus();
		return false
	} else{
		return true
	}
}

function fat(id,from,to){
	var frames = 30;
	var interval = 30;
	var delay = interval;
	var frame = 0;
	if (from.length < 7) from += from.substr(1,3);
	if (to.length < 7) to += to.substr(1,3);
	var rf = parseInt(from.substr(1,2),16);
	var gf = parseInt(from.substr(3,2),16);
	var bf = parseInt(from.substr(5,2),16);
	var rt = parseInt(to.substr(1,2),16);
	var gt = parseInt(to.substr(3,2),16);
	var bt = parseInt(to.substr(5,2),16);
	var r,g,b,h;
	while (frame < frames)
	{
		r = Math.floor(rf * ((frames-frame)/frames) + rt * (frame/frames));
		g = Math.floor(gf * ((frames-frame)/frames) + gt * (frame/frames));
		b = Math.floor(bf * ((frames-frame)/frames) + bt * (frame/frames));
		r = r.toString(16); if (r.length == 1) r = '0' + r;
		g = g.toString(16); if (g.length == 1) g = '0' + g;
		b = b.toString(16); if (b.length == 1) b = '0' + b;
		h = r+g+b;
		setTimeout("document.getElementById('"+id+"').style.color = '#"+h+"';", delay);
		frame++;
		delay = interval * frame; 
	}
}