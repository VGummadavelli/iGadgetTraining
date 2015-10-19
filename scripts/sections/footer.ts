$("./body") {
  insert("footer", "Powered by Moovweb", class: "mw-footer") {
  	# Ticket IG-1 - Moved the Footer into mw-footer
  	move_here("preceding-sibling::div[@id='Footer']", 'top')

    # Move stuff here
  }
}
