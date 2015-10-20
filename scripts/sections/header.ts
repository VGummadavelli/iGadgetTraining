$("./body"){

	add_class("mw-header")

	$(".//div[@id='Header']"){

		add_class("mw-fixed-height")
		
		attribute("data-ur-set", "toggler")

		$("./div[@id='Logo']"){	

		    //add_class('test-mw')

		    $(".//div[contains(@id,'LogoContainer')]"){

		    	add_class('inline_left')

		    	$(".//a/span"){
		    		add_class('mw-logo-color')
		    	}
		    }
 
		    $(".//div[contains(@id,'TopMenu')]"){

				
			}

			//remove(".//li[not(contains(@class, 'CartLink') or contains(@class, 'First'))]")
			//move_here('/../../../div[@id='TopMenu']')
			//move_here("ancestor::div[@id='TopMenu']", 'bottom')

		}
		//Closing #Logo Scope

		insert('div', class: 'mw_header_bottom') {
			insert('div', class: 'mw_search')
		}

		$(".//div[@class='mw_search']"){
			move_here("//div[@id='SearchForm']", "bottom") {
				remove("./p")
				
				 $("./form") {
					# add_class('inline_left')

				 	remove("./label")

				 	# Change search button background image
			      
				    $("./input[@type='text']") {
				      wrap("div", class: "mw-text-container")
				      add_class("mw-search-input")
				      attribute("placeholder", "Search...")
				      	
				    }

			        $("./input[@type='image']") {
			        	
			          wrap("div", class: "mw-search-btn")
			          attribute("style", "opacity:0;")

			          //change this	
			          //insert("i", class: "sprites-cart")
						
						add_class('mw-search-img')
			          	
						attribute('src', "")
						attribute('class', "")
						attribute('id', "SearchBtn")
						attribute('width','34px')
						attribute('height','34px')
						attribute('border','0px')
						attribute('title','')						
			        }

			        $("./div[@class='mw-search-btn']"){
			        	insert("i", class:"sprites-search")
					}

					$("./div[@class='mw-search-btn']/i"){
						wrap("div", class: 'mw-search-icon')
						add_class("mw-inline-block")
					}
			     }


			}

			$(".//SearchForm"){
				


			}

			insert("i", class: "sprites-menu") {
		    	# add_class('inline_right')
		     	add_class('mw-float-right-block')
			}

		}


	}

	
}