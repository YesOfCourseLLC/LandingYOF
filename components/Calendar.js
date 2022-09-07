import Script from 'next/script'
import React, { useRef, useState } from 'react'
import { sdkUrl } from '../defaultValues'

const Calendar = () => {
    const iframeCalendar = useRef(null)
    const [stripe, setStripe] = useState(null)
    console.log(stripe)
    return (
        <>
            <div ref={iframeCalendar}>Calendar</div>
            <Script
                id="stripe-js"
                src={sdkUrl}
                onLoad={() => {
                    setStripe(iframeCalendar.current,{
                        stripe: new SimplybookWidget({"widget_type":"iframe","url":"https:\/\/maidedponce.simplybook.me","theme":"creative","theme_settings":{"timeline_show_end_time":"0","timeline_modern_display":"as_slots","timeline_hide_unavailable":"1","index_page_content_grid":"[{\"template\":\"col_25_50_25\",\"items\":[\"timetable\",\"about-us\",\"contacts\"]}]","hide_past_days":"0","sb_base_color":"#33bb60","display_item_mode":"block","booking_nav_bg_color":"#d1e9c6","body_bg_color":"#fdfdfd","sb_review_image":"","dark_font_color":"#494949","light_font_color":"#ffffff","hide_img_mode":"0","show_sidebar":"1","sb_busy":"#dad2ce","sb_available":"#d3e0f1"},"timeline":"modern","datepicker":"top_calendar","is_rtl":false,"app_config":{"allow_switch_to_ada":0,"predefined":[]}})
                    })
                }}
            />
        </>

    )
}

export default Calendar