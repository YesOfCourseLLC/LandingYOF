import Script from 'next/script'
import React, { useRef, useState } from 'react'
import { ownUrl, sdkUrl } from '../defaultValues'

const Calendar = () => {
    const iframeCalendar = useRef(null)
    const [stripe, setStripe] = useState(null)

    return (
        <>
            <div ref={iframeCalendar}>Calendar</div>
            <Script
                id="stripe-js"
                src={sdkUrl}
                onLoad={() => {
                    setStripe(iframeCalendar.current,{
                        stripe: new SimplybookWidget({"widget_type":"iframe","url":`https:\/\/${ownUrl}`,"theme":"dainty","theme_settings":{"timeline_show_end_time":"1","timeline_hide_unavailable":"1","hide_past_days":"0","sb_base_color":"#00c7d1","secondary_color":"#e4ebf5","sb_text_color":"#a1a1a1","display_item_mode":"list","body_bg_color":"#ffffff","sb_background_image":"","sb_review_image":"","dark_font_color":"#293b36","light_font_color":"#ffffff","sb_company_label_color":"#ffffff","sb_cancellation_color":"#007e85","hide_img_mode":"0"},"timeline":"modern","datepicker":"top_calendar","is_rtl":false,"app_config":{"allow_switch_to_ada":0,"predefined":[]}})
                    })
                }}
            />
        </>

    )
}

export default Calendar