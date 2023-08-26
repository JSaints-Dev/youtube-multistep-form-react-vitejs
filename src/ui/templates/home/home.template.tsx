import { Link } from 'react-router-dom'

import { CONSTANTS } from './constants'
import { HeaderDashboard } from './subcomponents'

export const HomeTemplate = ({ features }: { features?: Features[] }) => {
  return (
    <main className="flex h-[100vh] w-full flex-col items-start justify-start bg-light">
      <HeaderDashboard title={CONSTANTS.titleHeader} />

      {features && features?.length > 0 ? (
        <section className="grid w-full grid-cols-3 gap-4 p-10">
          {features.map((item) => (
            <Link key={item.path} to={item.path}>
              <div className="m-auto flex h-56 w-56 cursor-pointer flex-col gap-2 rounded-xl bg-primary p-6 shadow-accent hover:shadow-lg">
                <h2 className="text-2xl font-semibold text-secondary ">
                  {item.title}
                </h2>
                <p className="text-sm text-dark">{item.description}</p>
              </div>
            </Link>
          ))}
        </section>
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-light pt-10">
          <p className="text-xl text-primary">{CONSTANTS.noFeaturesFound}</p>
        </div>
      )}
    </main>
  )
}
