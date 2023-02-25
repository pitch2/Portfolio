window.onload = () => {

    window.addEventListener("scroll", () => {
        let hauteur = document.documentElement.scrollHeight - window.innerHeight
        let position = window.scrollY
        let largeur = document.documentElement.clientWidth
        let barre = position / hauteur * largeur
        document.getElementById("progress").style.width = barre+"px"
    })
}
(function(){
	$(document).on('scroll',function(){
		let hauteur = $(document).height()-$(window).height()
		let position = $(document).scrollTop()
		letlargeur = $(window).width()
		let barre = position / hauteur * largeur	
		$("#progress").css("width",barre)
	});
});