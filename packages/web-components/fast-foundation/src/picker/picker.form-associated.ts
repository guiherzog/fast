import { FormAssociated } from "../form-associated/form-associated.js";
import { FoundationElement } from "../foundation-element/foundation-element.js";

class _Picker extends FoundationElement {}
interface _Picker extends FormAssociated {}

/**
 * A form-associated base class for the {@link @microsoft/fast-foundation#(Picker:class)} component.
 *
 * @beta
 */
export class FormAssociatedPicker extends FormAssociated(_Picker) {
    proxy = document.createElement("input");
}
