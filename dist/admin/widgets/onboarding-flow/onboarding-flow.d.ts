import { WidgetConfig, WidgetProps } from "@medusajs/admin";
import { OnboardingState } from "../../../models/onboarding";
export type StepContentProps = WidgetProps & {
    onNext?: Function;
    isComplete?: boolean;
    data?: OnboardingState;
};
declare const OnboardingFlow: (props: WidgetProps) => import("react/jsx-runtime").JSX.Element;
export declare const config: WidgetConfig;
export default OnboardingFlow;
