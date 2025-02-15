import {
    elements,
    html,
    ref,
    slotted,
    ViewTemplate,
    when,
} from "@microsoft/fast-element";
import type { FoundationElementTemplate } from "../foundation-element/foundation-element.js";
import { endSlotTemplate, startSlotTemplate } from "../patterns/start-end.js";
import type { HorizontalScroll, HorizontalScrollOptions } from "./horizontal-scroll.js";

/**
 * @public
 */
export const horizontalScrollTemplate: FoundationElementTemplate<
    ViewTemplate<HorizontalScroll>,
    HorizontalScrollOptions
> = (context, definition) => html`
    <template
        class="horizontal-scroll"
        @keyup="${(x, c) => x.keyupHandler(c.event as KeyboardEvent)}"
    >
        ${startSlotTemplate(context, definition)}
        <div class="scroll-area" part="scroll-area">
            <div
                class="scroll-view"
                part="scroll-view"
                @scroll="${x => x.scrolled()}"
                ${ref("scrollContainer")}
            >
                <div class="content-container" part="content-container" ${ref("content")}>
                    <slot
                        ${slotted({
                            property: "scrollItems",
                            filter: elements(),
                        })}
                    ></slot>
                </div>
            </div>
            ${when(
                x => x.view !== "mobile",
                html<HorizontalScroll>`
                    <div
                        class="scroll scroll-prev"
                        part="scroll-prev"
                        ${ref("previousFlipperContainer")}
                    >
                        <div class="scroll-action" part="scroll-action-previous">
                            <slot name="previous-flipper">
                                ${definition.previousFlipper instanceof Function
                                    ? definition.previousFlipper(context, definition)
                                    : definition.previousFlipper ?? ""}
                            </slot>
                        </div>
                    </div>
                    <div
                        class="scroll scroll-next"
                        part="scroll-next"
                        ${ref("nextFlipperContainer")}
                    >
                        <div class="scroll-action" part="scroll-action-next">
                            <slot name="next-flipper">
                                ${definition.nextFlipper instanceof Function
                                    ? definition.nextFlipper(context, definition)
                                    : definition.nextFlipper ?? ""}
                            </slot>
                        </div>
                    </div>
                `
            )}
        </div>
        ${endSlotTemplate(context, definition)}
    </template>
`;
