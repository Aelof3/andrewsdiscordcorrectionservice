
function loop(){
    requestAnimationFrame(loop);
    document.querySelectorAll('[class*="messageContent"]').forEach(div=>{div.textContent = div.textContent.replace(/g/g,"j").replace(/G/g,"J")})
}

// this is the code which will be injected into a given page...
(function() {
	loop();
})();