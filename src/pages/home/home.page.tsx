import { HomeTemplate } from '@ui/templates'

const FEATURES: Features[] = [
  {
    title: 'MultiStep Form',
    path: '/multi-step-form',
    description: 'A multi-step form with validation and progress bar',
  },
]

export default function HomePage() {
  return <HomeTemplate features={FEATURES} />
}
