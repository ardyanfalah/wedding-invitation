import tw, { styled } from 'twin.macro'

const Button = styled.button(
  ({ isPrimary, isSecondary, isSmall, disabled }) => [
    // The common button styles added with the tw import
    tw`font-sans font-semibold px-8 py-4 rounded-xl focus:outline-none`,
    tw`transform transition-transform duration-75 `,

    // Use the variant grouping feature to add variants to multiple classes
    tw`hover:(scale-105)`,

    // Use props to conditionally style your components
    isPrimary && tw`bg-white border-2 border-blues-200 text-blues-200`,

    // Combine regular css with tailwind classes within backticks
    isSecondary && tw`bg-blues-200 text-white`,

    disabled ? tw`opacity-50` : tw`opacity-100`,

    // Conditional props can be added
    isSmall ? tw`text-sm` : tw`text-lg`
  ]
)

export default Button
