import HeadingWidget from "./heading-widget";
import TextWidget from "./text-widget";
import StarWidget from "./star-widget";
import FieldWidget from "./field-widget";
import ButtonWidget from "./button-widget";
import StarWidget2 from "./star-2-widget";
import StarWidget3 from "./star-3-widget";
import CloseButtonWidget from "./close-button-widget";

const widgets = {
    heading_widget: new HeadingWidget(),
    text_widget: new TextWidget(),
    star_widget: new StarWidget(),
    star_widget2: new StarWidget2(),
    star_widget3: new StarWidget3(),
    field_widget: new FieldWidget(),
    button_widget: new ButtonWidget(),
    close_button_widget: new CloseButtonWidget(),
}

export default widgets;