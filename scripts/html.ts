# HTML Transformations go here
$("/html") {

  add_canonical_tag()
  rewrite_links()
  absolutize()
  rewrite_aspnet_scripts()
  clean_mobile_meta_tags()
  remove_all_styles()
  remove_internal_styles()

  # Rewrite relative image paths to point to original desktop site.
//absolutize_srcs()
# Add the mobile meta tags 
clean_mobile_meta_tags()
   
# Remove styles and comments
remove_all_styles()
remove_html_comments()

  add_assets()

  @import "sections/header.ts"
  @import "sections/footer.ts"

  @import "mappings.ts"
  
  move_css_to_head()
  move_css_above_scripts()

  $(".//img[not(contains(@src, '"+$asset_host+"'))]") {
    $("self::img[not(contains(@class,'mw-skip-opt'))]") {
      perf.optimize_image() {
        perf.quality("70")
        perf.format("jpeg")
      }
    }
    $("self::img[contains(@class,'mw-late-load')]") {
      attribute("src") {
        name("data-src")
      }
    }
  }
  
}