$("./body") {
	$(".//div[@id='Footer']"){
		add_class("mw-footer")

		$(".//p"){
			remove(".//a")
			text("All prices are in USD. Copyright 2015 iGadgetCommerce.")
		}

		# insert("p"){
		#	text("All prices are in USD. Copyright 2015 iGadgetCommerce.")
		# }
		
	  	insert("footer", "Powered by:") {
	  		insert("br")
	  		insert("a", class:'sprites-moovweb') {
	  			attribute('href', 'http://moovweb.com')
	  			attribute('target','_blank')
	  		}

	  		$(".//a"){
	  			add_class('mw-footer-inline-block')
	  		}
		  	# Move stuff here
		}

	}
  # move_here("preceding-sibling::div[@id='Footer']", 'top') {
  	# add_class("mw-footer")
  	
  # }

  
}
