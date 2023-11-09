import { Fragment } from 'react'

import { usePrepareConfirmationData } from '@ui/templates/multi-step-form'

export const FormConfirm = () => {
  const { preparedConfirmationData } = usePrepareConfirmationData()

  return (
    <section className="flex justify-center pb-6">
      <div className="flex w-auto flex-col gap-4 ">
        <div className="flex flex-col rounded-md bg-light">
          {preparedConfirmationData.map(({ section, values }, indexSection) => (
            <Fragment key={section}>
              {indexSection > 0 && <div className="h-[1px] bg-secondary" />}
              <span className="px-4 pt-4 text-lg font-semibold text-dark">
                {section}:
              </span>
              <div className="h-[1px] bg-secondary" />
              {values.map((item, indexItem) => (
                <Fragment key={item.label}>
                  {indexItem > 0 && <div className="h-[1px] bg-secondary" />}
                  <div className="flex h-7 items-center gap-1 p-4">
                    <span className="font-semibold text-primary">
                      {item.label}
                    </span>
                    <span className="text-primary">{item.value}</span>
                  </div>
                </Fragment>
              ))}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}
