import { StoryObj } from '@storybook/react';

declare const meta: {
    title: string;
    component: import('../../../../../node_modules/react').FC<import('./Button').ButtonProps>;
    parameters: {
        docs: {
            description: {
                component: string;
            };
        };
    };
    tags: string[];
    args: {
        children: string;
        onClick: import('@vitest/spy').Mock<(...args: any[]) => any>;
    };
    decorators: (Story: import('@storybook/csf').PartialStoryFn<import('@storybook/react').ReactRenderer, {
        color?: ("primary" | "inherit") | undefined;
        component?: import('@mui/material').ButtonProps["component"];
        disabled?: boolean | undefined;
        disableElevation?: boolean | undefined;
        endIcon?: import('../../../../../node_modules/react').ReactNode;
        fullWidth?: boolean | undefined;
        size?: import('@mui/material').ButtonProps["size"];
        startIcon?: import('../../../../../node_modules/react').ReactNode;
        variant?: ("primary" | "secondary" | "tertiary" | "link" | "text") | undefined;
        children?: import('../../../../../node_modules/react').ReactNode;
        defaultChecked?: boolean | undefined;
        defaultValue?: string | number | readonly string[] | undefined;
        suppressContentEditableWarning?: boolean | undefined;
        suppressHydrationWarning?: boolean | undefined;
        accessKey?: string | undefined;
        autoCapitalize?: "off" | "none" | "on" | "sentences" | "words" | "characters" | undefined | (string & {});
        autoFocus?: boolean | undefined;
        className?: string | undefined;
        contentEditable?: (boolean | "true" | "false") | "inherit" | "plaintext-only" | undefined;
        contextMenu?: string | undefined;
        dir?: string | undefined;
        draggable?: (boolean | "true" | "false") | undefined;
        enterKeyHint?: "enter" | "done" | "go" | "next" | "previous" | "search" | "send" | undefined;
        hidden?: boolean | undefined;
        id?: string | undefined;
        lang?: string | undefined;
        nonce?: string | undefined;
        slot?: string | undefined;
        spellCheck?: (boolean | "true" | "false") | undefined;
        style?: import('../../../../../node_modules/react').CSSProperties | undefined;
        tabIndex?: NonNullable<import('../../../../../node_modules/react').HTMLAttributes<any>["tabIndex"]> | undefined;
        title?: string | undefined;
        translate?: "yes" | "no" | undefined;
        radioGroup?: string | undefined;
        role?: import('../../../../../node_modules/react').AriaRole | undefined;
        about?: string | undefined;
        content?: string | undefined;
        datatype?: string | undefined;
        inlist?: any;
        prefix?: string | undefined;
        property?: string | undefined;
        rel?: string | undefined;
        resource?: string | undefined;
        rev?: string | undefined;
        typeof?: string | undefined;
        vocab?: string | undefined;
        autoCorrect?: string | undefined;
        autoSave?: string | undefined;
        itemProp?: string | undefined;
        itemScope?: boolean | undefined;
        itemType?: string | undefined;
        itemID?: string | undefined;
        itemRef?: string | undefined;
        results?: number | undefined;
        security?: string | undefined;
        unselectable?: "on" | "off" | undefined;
        inputMode?: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search" | undefined;
        is?: string | undefined;
        "aria-activedescendant"?: string | undefined;
        "aria-atomic"?: (boolean | "true" | "false") | undefined;
        "aria-autocomplete"?: "none" | "inline" | "list" | "both" | undefined;
        "aria-braillelabel"?: string | undefined;
        "aria-brailleroledescription"?: string | undefined;
        "aria-busy"?: (boolean | "true" | "false") | undefined;
        "aria-checked"?: boolean | "false" | "mixed" | "true" | undefined;
        "aria-colcount"?: number | undefined;
        "aria-colindex"?: number | undefined;
        "aria-colindextext"?: string | undefined;
        "aria-colspan"?: number | undefined;
        "aria-controls"?: string | undefined;
        "aria-current"?: boolean | "false" | "true" | "page" | "step" | "location" | "date" | "time" | undefined;
        "aria-describedby"?: string | undefined;
        "aria-description"?: string | undefined;
        "aria-details"?: string | undefined;
        "aria-disabled"?: (boolean | "true" | "false") | undefined;
        "aria-dropeffect"?: "none" | "copy" | "execute" | "link" | "move" | "popup" | undefined;
        "aria-errormessage"?: string | undefined;
        "aria-expanded"?: (boolean | "true" | "false") | undefined;
        "aria-flowto"?: string | undefined;
        "aria-grabbed"?: (boolean | "true" | "false") | undefined;
        "aria-haspopup"?: boolean | "false" | "true" | "menu" | "listbox" | "tree" | "grid" | "dialog" | undefined;
        "aria-hidden"?: (boolean | "true" | "false") | undefined;
        "aria-invalid"?: boolean | "false" | "true" | "grammar" | "spelling" | undefined;
        "aria-keyshortcuts"?: string | undefined;
        "aria-label"?: string | undefined;
        "aria-labelledby"?: string | undefined;
        "aria-level"?: number | undefined;
        "aria-live"?: "off" | "assertive" | "polite" | undefined;
        "aria-modal"?: (boolean | "true" | "false") | undefined;
        "aria-multiline"?: (boolean | "true" | "false") | undefined;
        "aria-multiselectable"?: (boolean | "true" | "false") | undefined;
        "aria-orientation"?: "horizontal" | "vertical" | undefined;
        "aria-owns"?: string | undefined;
        "aria-placeholder"?: string | undefined;
        "aria-posinset"?: number | undefined;
        "aria-pressed"?: boolean | "false" | "mixed" | "true" | undefined;
        "aria-readonly"?: (boolean | "true" | "false") | undefined;
        "aria-relevant"?: "additions" | "additions removals" | "additions text" | "all" | "removals" | "removals additions" | "removals text" | "text" | "text additions" | "text removals" | undefined;
        "aria-required"?: (boolean | "true" | "false") | undefined;
        "aria-roledescription"?: string | undefined;
        "aria-rowcount"?: number | undefined;
        "aria-rowindex"?: number | undefined;
        "aria-rowindextext"?: string | undefined;
        "aria-rowspan"?: number | undefined;
        "aria-selected"?: (boolean | "true" | "false") | undefined;
        "aria-setsize"?: number | undefined;
        "aria-sort"?: "none" | "ascending" | "descending" | "other" | undefined;
        "aria-valuemax"?: number | undefined;
        "aria-valuemin"?: number | undefined;
        "aria-valuenow"?: number | undefined;
        "aria-valuetext"?: string | undefined;
        dangerouslySetInnerHTML?: {
            __html: string | TrustedHTML;
        } | undefined;
        onCopy?: import('../../../../../node_modules/react').ClipboardEventHandler<HTMLButtonElement> | undefined;
        onCopyCapture?: import('../../../../../node_modules/react').ClipboardEventHandler<HTMLButtonElement> | undefined;
        onCut?: import('../../../../../node_modules/react').ClipboardEventHandler<HTMLButtonElement> | undefined;
        onCutCapture?: import('../../../../../node_modules/react').ClipboardEventHandler<HTMLButtonElement> | undefined;
        onPaste?: import('../../../../../node_modules/react').ClipboardEventHandler<HTMLButtonElement> | undefined;
        onPasteCapture?: import('../../../../../node_modules/react').ClipboardEventHandler<HTMLButtonElement> | undefined;
        onCompositionEnd?: import('../../../../../node_modules/react').CompositionEventHandler<HTMLButtonElement> | undefined;
        onCompositionEndCapture?: import('../../../../../node_modules/react').CompositionEventHandler<HTMLButtonElement> | undefined;
        onCompositionStart?: import('../../../../../node_modules/react').CompositionEventHandler<HTMLButtonElement> | undefined;
        onCompositionStartCapture?: import('../../../../../node_modules/react').CompositionEventHandler<HTMLButtonElement> | undefined;
        onCompositionUpdate?: import('../../../../../node_modules/react').CompositionEventHandler<HTMLButtonElement> | undefined;
        onCompositionUpdateCapture?: import('../../../../../node_modules/react').CompositionEventHandler<HTMLButtonElement> | undefined;
        onFocus?: import('../../../../../node_modules/react').FocusEventHandler<HTMLButtonElement> | undefined;
        onFocusCapture?: import('../../../../../node_modules/react').FocusEventHandler<HTMLButtonElement> | undefined;
        onBlur?: import('../../../../../node_modules/react').FocusEventHandler<HTMLButtonElement> | undefined;
        onBlurCapture?: import('../../../../../node_modules/react').FocusEventHandler<HTMLButtonElement> | undefined;
        onChange?: import('../../../../../node_modules/react').FormEventHandler<HTMLButtonElement> | undefined;
        onChangeCapture?: import('../../../../../node_modules/react').FormEventHandler<HTMLButtonElement> | undefined;
        onBeforeInput?: import('../../../../../node_modules/react').FormEventHandler<HTMLButtonElement> | undefined;
        onBeforeInputCapture?: import('../../../../../node_modules/react').FormEventHandler<HTMLButtonElement> | undefined;
        onInput?: import('../../../../../node_modules/react').FormEventHandler<HTMLButtonElement> | undefined;
        onInputCapture?: import('../../../../../node_modules/react').FormEventHandler<HTMLButtonElement> | undefined;
        onReset?: import('../../../../../node_modules/react').FormEventHandler<HTMLButtonElement> | undefined;
        onResetCapture?: import('../../../../../node_modules/react').FormEventHandler<HTMLButtonElement> | undefined;
        onSubmit?: import('../../../../../node_modules/react').FormEventHandler<HTMLButtonElement> | undefined;
        onSubmitCapture?: import('../../../../../node_modules/react').FormEventHandler<HTMLButtonElement> | undefined;
        onInvalid?: import('../../../../../node_modules/react').FormEventHandler<HTMLButtonElement> | undefined;
        onInvalidCapture?: import('../../../../../node_modules/react').FormEventHandler<HTMLButtonElement> | undefined;
        onLoad?: import('../../../../../node_modules/react').ReactEventHandler<HTMLButtonElement> | undefined;
        onLoadCapture?: import('../../../../../node_modules/react').ReactEventHandler<HTMLButtonElement> | undefined;
        onError?: import('../../../../../node_modules/react').ReactEventHandler<HTMLButtonElement> | undefined;
        onErrorCapture?: import('../../../../../node_modules/react').ReactEventHandler<HTMLButtonElement> | undefined;
        onKeyDown?: import('../../../../../node_modules/react').KeyboardEventHandler<HTMLButtonElement> | undefined;
        onKeyDownCapture?: import('../../../../../node_modules/react').KeyboardEventHandler<HTMLButtonElement> | undefined;
        onKeyPress?: import('../../../../../node_modules/react').KeyboardEventHandler<HTMLButtonElement> | undefined;
        onKeyPressCapture?: import('../../../../../node_modules/react').KeyboardEventHandler<HTMLButtonElement> | undefined;
        onKeyUp?: import('../../../../../node_modules/react').KeyboardEventHandler<HTMLButtonElement> | undefined;
        onKeyUpCapture?: import('../../../../../node_modules/react').KeyboardEventHandler<HTMLButtonElement> | undefined;
        onAbort?: import('../../../../../node_modules/react').ReactEventHandler<HTMLButtonElement> | undefined;
        onAbortCapture?: import('../../../../../node_modules/react').ReactEventHandler<HTMLButtonElement> | undefined;
        onCanPlay?: import('../../../../../node_modules/react').ReactEventHandler<HTMLButtonElement> | undefined;
        onCanPlayCapture?: import('../../../../../node_modules/react').ReactEventHandler<HTMLButtonElement> | undefined;
        onCanPlayThrough?: import('../../../../../node_modules/react').ReactEventHandler<HTMLButtonElement> | undefined;
        onCanPlayThroughCapture?: import('../../../../../node_modules/react').ReactEventHandler<HTMLButtonElement> | undefined;
        onDurationChange?: import('../../../../../node_modules/react').ReactEventHandler<HTMLButtonElement> | undefined;
        onDurationChangeCapture?: import('../../../../../node_modules/react').ReactEventHandler<HTMLButtonElement> | undefined;
        onEmptied?: import('../../../../../node_modules/react').ReactEventHandler<HTMLButtonElement> | undefined;
        onEmptiedCapture?: import('../../../../../node_modules/react').ReactEventHandler<HTMLButtonElement> | undefined;
        onEncrypted?: import('../../../../../node_modules/react').ReactEventHandler<HTMLButtonElement> | undefined;
        onEncryptedCapture?: import('../../../../../node_modules/react').ReactEventHandler<HTMLButtonElement> | undefined;
        onEnded?: import('../../../../../node_modules/react').ReactEventHandler<HTMLButtonElement> | undefined;
        onEndedCapture?: import('../../../../../node_modules/react').ReactEventHandler<HTMLButtonElement> | undefined;
        onLoadedData?: import('../../../../../node_modules/react').ReactEventHandler<HTMLButtonElement> | undefined;
        onLoadedDataCapture?: import('../../../../../node_modules/react').ReactEventHandler<HTMLButtonElement> | undefined;
        onLoadedMetadata?: import('../../../../../node_modules/react').ReactEventHandler<HTMLButtonElement> | undefined;
        onLoadedMetadataCapture?: import('../../../../../node_modules/react').ReactEventHandler<HTMLButtonElement> | undefined;
        onLoadStart?: import('../../../../../node_modules/react').ReactEventHandler<HTMLButtonElement> | undefined;
        onLoadStartCapture?: import('../../../../../node_modules/react').ReactEventHandler<HTMLButtonElement> | undefined;
        onPause?: import('../../../../../node_modules/react').ReactEventHandler<HTMLButtonElement> | undefined;
        onPauseCapture?: import('../../../../../node_modules/react').ReactEventHandler<HTMLButtonElement> | undefined;
        onPlay?: import('../../../../../node_modules/react').ReactEventHandler<HTMLButtonElement> | undefined;
        onPlayCapture?: import('../../../../../node_modules/react').ReactEventHandler<HTMLButtonElement> | undefined;
        onPlaying?: import('../../../../../node_modules/react').ReactEventHandler<HTMLButtonElement> | undefined;
        onPlayingCapture?: import('../../../../../node_modules/react').ReactEventHandler<HTMLButtonElement> | undefined;
        onProgress?: import('../../../../../node_modules/react').ReactEventHandler<HTMLButtonElement> | undefined;
        onProgressCapture?: import('../../../../../node_modules/react').ReactEventHandler<HTMLButtonElement> | undefined;
        onRateChange?: import('../../../../../node_modules/react').ReactEventHandler<HTMLButtonElement> | undefined;
        onRateChangeCapture?: import('../../../../../node_modules/react').ReactEventHandler<HTMLButtonElement> | undefined;
        onResize?: import('../../../../../node_modules/react').ReactEventHandler<HTMLButtonElement> | undefined;
        onResizeCapture?: import('../../../../../node_modules/react').ReactEventHandler<HTMLButtonElement> | undefined;
        onSeeked?: import('../../../../../node_modules/react').ReactEventHandler<HTMLButtonElement> | undefined;
        onSeekedCapture?: import('../../../../../node_modules/react').ReactEventHandler<HTMLButtonElement> | undefined;
        onSeeking?: import('../../../../../node_modules/react').ReactEventHandler<HTMLButtonElement> | undefined;
        onSeekingCapture?: import('../../../../../node_modules/react').ReactEventHandler<HTMLButtonElement> | undefined;
        onStalled?: import('../../../../../node_modules/react').ReactEventHandler<HTMLButtonElement> | undefined;
        onStalledCapture?: import('../../../../../node_modules/react').ReactEventHandler<HTMLButtonElement> | undefined;
        onSuspend?: import('../../../../../node_modules/react').ReactEventHandler<HTMLButtonElement> | undefined;
        onSuspendCapture?: import('../../../../../node_modules/react').ReactEventHandler<HTMLButtonElement> | undefined;
        onTimeUpdate?: import('../../../../../node_modules/react').ReactEventHandler<HTMLButtonElement> | undefined;
        onTimeUpdateCapture?: import('../../../../../node_modules/react').ReactEventHandler<HTMLButtonElement> | undefined;
        onVolumeChange?: import('../../../../../node_modules/react').ReactEventHandler<HTMLButtonElement> | undefined;
        onVolumeChangeCapture?: import('../../../../../node_modules/react').ReactEventHandler<HTMLButtonElement> | undefined;
        onWaiting?: import('../../../../../node_modules/react').ReactEventHandler<HTMLButtonElement> | undefined;
        onWaitingCapture?: import('../../../../../node_modules/react').ReactEventHandler<HTMLButtonElement> | undefined;
        onAuxClick?: import('../../../../../node_modules/react').MouseEventHandler<HTMLButtonElement> | undefined;
        onAuxClickCapture?: import('../../../../../node_modules/react').MouseEventHandler<HTMLButtonElement> | undefined;
        onClick?: import('../../../../../node_modules/react').MouseEventHandler<HTMLButtonElement> | undefined;
        onClickCapture?: import('../../../../../node_modules/react').MouseEventHandler<HTMLButtonElement> | undefined;
        onContextMenu?: import('../../../../../node_modules/react').MouseEventHandler<HTMLButtonElement> | undefined;
        onContextMenuCapture?: import('../../../../../node_modules/react').MouseEventHandler<HTMLButtonElement> | undefined;
        onDoubleClick?: import('../../../../../node_modules/react').MouseEventHandler<HTMLButtonElement> | undefined;
        onDoubleClickCapture?: import('../../../../../node_modules/react').MouseEventHandler<HTMLButtonElement> | undefined;
        onDrag?: import('../../../../../node_modules/react').DragEventHandler<HTMLButtonElement> | undefined;
        onDragCapture?: import('../../../../../node_modules/react').DragEventHandler<HTMLButtonElement> | undefined;
        onDragEnd?: import('../../../../../node_modules/react').DragEventHandler<HTMLButtonElement> | undefined;
        onDragEndCapture?: import('../../../../../node_modules/react').DragEventHandler<HTMLButtonElement> | undefined;
        onDragEnter?: import('../../../../../node_modules/react').DragEventHandler<HTMLButtonElement> | undefined;
        onDragEnterCapture?: import('../../../../../node_modules/react').DragEventHandler<HTMLButtonElement> | undefined;
        onDragExit?: import('../../../../../node_modules/react').DragEventHandler<HTMLButtonElement> | undefined;
        onDragExitCapture?: import('../../../../../node_modules/react').DragEventHandler<HTMLButtonElement> | undefined;
        onDragLeave?: import('../../../../../node_modules/react').DragEventHandler<HTMLButtonElement> | undefined;
        onDragLeaveCapture?: import('../../../../../node_modules/react').DragEventHandler<HTMLButtonElement> | undefined;
        onDragOver?: import('../../../../../node_modules/react').DragEventHandler<HTMLButtonElement> | undefined;
        onDragOverCapture?: import('../../../../../node_modules/react').DragEventHandler<HTMLButtonElement> | undefined;
        onDragStart?: import('../../../../../node_modules/react').DragEventHandler<HTMLButtonElement> | undefined;
        onDragStartCapture?: import('../../../../../node_modules/react').DragEventHandler<HTMLButtonElement> | undefined;
        onDrop?: import('../../../../../node_modules/react').DragEventHandler<HTMLButtonElement> | undefined;
        onDropCapture?: import('../../../../../node_modules/react').DragEventHandler<HTMLButtonElement> | undefined;
        onMouseDown?: import('../../../../../node_modules/react').MouseEventHandler<HTMLButtonElement> | undefined;
        onMouseDownCapture?: import('../../../../../node_modules/react').MouseEventHandler<HTMLButtonElement> | undefined;
        onMouseEnter?: import('../../../../../node_modules/react').MouseEventHandler<HTMLButtonElement> | undefined;
        onMouseLeave?: import('../../../../../node_modules/react').MouseEventHandler<HTMLButtonElement> | undefined;
        onMouseMove?: import('../../../../../node_modules/react').MouseEventHandler<HTMLButtonElement> | undefined;
        onMouseMoveCapture?: import('../../../../../node_modules/react').MouseEventHandler<HTMLButtonElement> | undefined;
        onMouseOut?: import('../../../../../node_modules/react').MouseEventHandler<HTMLButtonElement> | undefined;
        onMouseOutCapture?: import('../../../../../node_modules/react').MouseEventHandler<HTMLButtonElement> | undefined;
        onMouseOver?: import('../../../../../node_modules/react').MouseEventHandler<HTMLButtonElement> | undefined;
        onMouseOverCapture?: import('../../../../../node_modules/react').MouseEventHandler<HTMLButtonElement> | undefined;
        onMouseUp?: import('../../../../../node_modules/react').MouseEventHandler<HTMLButtonElement> | undefined;
        onMouseUpCapture?: import('../../../../../node_modules/react').MouseEventHandler<HTMLButtonElement> | undefined;
        onSelect?: import('../../../../../node_modules/react').ReactEventHandler<HTMLButtonElement> | undefined;
        onSelectCapture?: import('../../../../../node_modules/react').ReactEventHandler<HTMLButtonElement> | undefined;
        onTouchCancel?: import('../../../../../node_modules/react').TouchEventHandler<HTMLButtonElement> | undefined;
        onTouchCancelCapture?: import('../../../../../node_modules/react').TouchEventHandler<HTMLButtonElement> | undefined;
        onTouchEnd?: import('../../../../../node_modules/react').TouchEventHandler<HTMLButtonElement> | undefined;
        onTouchEndCapture?: import('../../../../../node_modules/react').TouchEventHandler<HTMLButtonElement> | undefined;
        onTouchMove?: import('../../../../../node_modules/react').TouchEventHandler<HTMLButtonElement> | undefined;
        onTouchMoveCapture?: import('../../../../../node_modules/react').TouchEventHandler<HTMLButtonElement> | undefined;
        onTouchStart?: import('../../../../../node_modules/react').TouchEventHandler<HTMLButtonElement> | undefined;
        onTouchStartCapture?: import('../../../../../node_modules/react').TouchEventHandler<HTMLButtonElement> | undefined;
        onPointerDown?: import('../../../../../node_modules/react').PointerEventHandler<HTMLButtonElement> | undefined;
        onPointerDownCapture?: import('../../../../../node_modules/react').PointerEventHandler<HTMLButtonElement> | undefined;
        onPointerMove?: import('../../../../../node_modules/react').PointerEventHandler<HTMLButtonElement> | undefined;
        onPointerMoveCapture?: import('../../../../../node_modules/react').PointerEventHandler<HTMLButtonElement> | undefined;
        onPointerUp?: import('../../../../../node_modules/react').PointerEventHandler<HTMLButtonElement> | undefined;
        onPointerUpCapture?: import('../../../../../node_modules/react').PointerEventHandler<HTMLButtonElement> | undefined;
        onPointerCancel?: import('../../../../../node_modules/react').PointerEventHandler<HTMLButtonElement> | undefined;
        onPointerCancelCapture?: import('../../../../../node_modules/react').PointerEventHandler<HTMLButtonElement> | undefined;
        onPointerEnter?: import('../../../../../node_modules/react').PointerEventHandler<HTMLButtonElement> | undefined;
        onPointerLeave?: import('../../../../../node_modules/react').PointerEventHandler<HTMLButtonElement> | undefined;
        onPointerOver?: import('../../../../../node_modules/react').PointerEventHandler<HTMLButtonElement> | undefined;
        onPointerOverCapture?: import('../../../../../node_modules/react').PointerEventHandler<HTMLButtonElement> | undefined;
        onPointerOut?: import('../../../../../node_modules/react').PointerEventHandler<HTMLButtonElement> | undefined;
        onPointerOutCapture?: import('../../../../../node_modules/react').PointerEventHandler<HTMLButtonElement> | undefined;
        onGotPointerCapture?: import('../../../../../node_modules/react').PointerEventHandler<HTMLButtonElement> | undefined;
        onGotPointerCaptureCapture?: import('../../../../../node_modules/react').PointerEventHandler<HTMLButtonElement> | undefined;
        onLostPointerCapture?: import('../../../../../node_modules/react').PointerEventHandler<HTMLButtonElement> | undefined;
        onLostPointerCaptureCapture?: import('../../../../../node_modules/react').PointerEventHandler<HTMLButtonElement> | undefined;
        onScroll?: import('../../../../../node_modules/react').UIEventHandler<HTMLButtonElement> | undefined;
        onScrollCapture?: import('../../../../../node_modules/react').UIEventHandler<HTMLButtonElement> | undefined;
        onWheel?: import('../../../../../node_modules/react').WheelEventHandler<HTMLButtonElement> | undefined;
        onWheelCapture?: import('../../../../../node_modules/react').WheelEventHandler<HTMLButtonElement> | undefined;
        onAnimationStart?: import('../../../../../node_modules/react').AnimationEventHandler<HTMLButtonElement> | undefined;
        onAnimationStartCapture?: import('../../../../../node_modules/react').AnimationEventHandler<HTMLButtonElement> | undefined;
        onAnimationEnd?: import('../../../../../node_modules/react').AnimationEventHandler<HTMLButtonElement> | undefined;
        onAnimationEndCapture?: import('../../../../../node_modules/react').AnimationEventHandler<HTMLButtonElement> | undefined;
        onAnimationIteration?: import('../../../../../node_modules/react').AnimationEventHandler<HTMLButtonElement> | undefined;
        onAnimationIterationCapture?: import('../../../../../node_modules/react').AnimationEventHandler<HTMLButtonElement> | undefined;
        onTransitionEnd?: import('../../../../../node_modules/react').TransitionEventHandler<HTMLButtonElement> | undefined;
        onTransitionEndCapture?: import('../../../../../node_modules/react').TransitionEventHandler<HTMLButtonElement> | undefined;
        form?: string | undefined;
        ref?: ((instance: HTMLButtonElement | null) => void | import('../../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import('../../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import('../../../../../node_modules/react').RefObject<HTMLButtonElement> | null | undefined;
        key?: import('../../../../../node_modules/react').Key | null | undefined;
        type?: "submit" | "reset" | "button" | undefined;
        name?: string | undefined;
        action?: import('../../../../../node_modules/react').Ref<import('@mui/material').ButtonBaseActions> | undefined;
        centerRipple?: boolean | undefined;
        disableRipple?: boolean | undefined;
        disableTouchRipple?: boolean | undefined;
        focusRipple?: boolean | undefined;
        focusVisibleClassName?: string | undefined;
        LinkComponent?: import('../../../../../node_modules/react').ElementType | undefined;
        onFocusVisible?: import('../../../../../node_modules/react').FocusEventHandler<any> | undefined;
        TouchRippleProps?: Partial<import('@mui/material/ButtonBase/TouchRipple').TouchRippleProps> | undefined;
        touchRippleRef?: import('../../../../../node_modules/react').Ref<import('@mui/material/ButtonBase/TouchRipple').TouchRippleActions> | undefined;
        value?: string | readonly string[] | number | undefined;
        formAction?: string | import('../../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_FORM_ACTIONS[keyof import('../../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_FORM_ACTIONS] | undefined;
        formEncType?: string | undefined;
        formMethod?: string | undefined;
        formNoValidate?: boolean | undefined;
        formTarget?: string | undefined;
        disableFocusRipple?: boolean | undefined;
    }>) => import("@emotion/react/jsx-runtime").JSX.Element;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
export declare const Secondary: Story;
export declare const Tertiary: Story;
export declare const Sizing: Story;
export declare const WithIconsAndLabel: Story;
export declare const FullWidth: Story;
/**
 * In some designs, a link may need to look like a button while still
 * functioning as a standard link. Below are two examples where an anchor
 * (`<a>`) tag or a `Link` component from `react-router-dom` can be used to
 * achieve this effect. Note that in this example, the `Link` component mimics
 * the behavior of `react-router-dom`.
 *
 * The key adjustment here is to make the
 * button component not render as a button component. To achieve this the `role`
 * has been set to `undefined` and the root element is set to be a `div`. This
 * ensures that the "button-styled link" behaves correctly without causing
 * accessibility issues or styling conflicts.
 *
 * It’s important to note, it's recommended to avoid nesting interactive
 * elements to prevent potential accessibility issues and unexpected behavior.
 */
export declare const LinkButtons: Story;
