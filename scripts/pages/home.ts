# Place holder/example file
$("./body"){
	add_class("mw-home")

	$(".//div[@id='AjaxLoading']"){
		remove()
	}
	$(".//div[@id='Logo']"){
		add_class('mw-inline-container')	
	}
	$(".//div[@id='TopMenu']"){

		add_class('inline_right')

		$("./ul"){
			add_class('remove_ul_style')
			add_class('mw-inline-container-logo')

		}

		remove(".//li[not(contains(@class, 'CartLink') or contains(@class, 'First'))]")
		
		$(".//li[@class='CartLink']"){
			
			move_to("..", "top")

			add_class('mw-inline-left-cart')


			$(".//a"){
				text("")

				insert("i", class: "sprites-cart")
				$("./i"){
					add_class('mw-change-display-to-inline-block')
				}

			}
		}


		$(".//li[@class='First']"){
			add_class('inline_right')

			$(".//a"){

				text("")
				
				insert("i", class: "sprites-user")
				$("./i"){
					add_class('mw-change-display-to-inline-block')
				}
			}
		}

		
	    
		move_to("//div[@id='Logo']")
	}
	
}