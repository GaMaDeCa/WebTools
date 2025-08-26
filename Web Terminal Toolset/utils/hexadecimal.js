const MH = true;
const HEX_TABLE="0123456789ABCDEF";
function __dec2hex(dec) {
	return HEX_TABLE[Math.floor(dec/16)]+HEX_TABLE[dec%16];
}
function __hex2dec(hex) {
	let dec = 0;
	const hl = hex.length - 1;
	for (let i = 0; i < hex.length; i++) {
		let f = HEX_TABLE.indexOf(hex[i]);
		if (f < 0)
			continue;
		dec += f * Math.pow(16, hl-i);
	}
	return dec;
}
function dec2hex(input) {
	let array=String(input).split(/[,.:; ]+/);
	let alen=array.length-1;
	let res="\n";
	let item;
	for (let i=0; i<array.length; i++) {
		item=array[i];
		res+=""+__dec2hex(item)+(i!=alen?":":"");
	}
	return res;
}
function hex2dec(input) {
	let array=String(input).split(/[,.:; ]+/);
	let alen=array.length-1;
	let res="\n";
	let item;
	for (let i=0; i<array.length; i++) {
		item=array[i];
		res+=""+__hex2dec(item)+(i!=alen?":":"");
	}
	if (res.indexOf(":") == -1)
		res = parseInt(res);
	return res;
}