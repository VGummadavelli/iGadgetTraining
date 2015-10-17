$("./body"){

	add_class("mw-header")

	$(".//div[@id='Header']"){
		
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
					add_class('inline_left')

				 	remove("./label")
				 	# Change search button background image
			      
				    $("./input[@type='text']") {
				      attribute("placeholder", "Search...")
				    }

			        $("./input[@type='image']") {
			        	
			          add_class('mw_search_btn')
			          //change this	
			          //insert("i", class: "sprites-cart")
				
			        }
			     }

			    insert("i", class: "sprites-menu") {
			    	add_class('inline_right')
			     	add_class('mw-change-display-to-inline-block')
				}

			}

			$(".//SearchForm"){
				


			}

		}


	}

	
}