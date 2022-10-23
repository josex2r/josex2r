export const TimelineJob = ({
  date,
  title,
  description,
}) => (
  <>
    <h2 class="text-md font-bold pt-1 text-gray-700">{title}</h2>
    <small
      class="font-bold text-gray-500 tracking-wide"
    >{date}</small>
    <p class="pt-1">
      {description}
    </p>
  </>
)

export const TimelineCard = ({
  image,
  company,
  jobs = [],
  left = false,
}) => (
  <div class="relative z-10">
    <img
      src={image}
      alt=""
      class="timeline-img"
    />
    <div class={`timeline-container ${left && 'timeline-container-left'}`}>
      <div class={`timeline-pointer ${left && 'timeline-pointer-left'}`} aria-hidden="true"></div>
      <div class="bg-white p-6 rounded-md shadow-md">
        {company && <h1 class="text-xl font-bold pt-1 text-indigo-600">{company}</h1>}
        {jobs.map((job) =>
          <div key={job.date} class="pt-3">
            <TimelineJob {...job} />
          </div>
        )}
      </div>
    </div>
  </div>
)

export const TimelineContainer = ({
  children,
}) => (
  <div class="relative container mx-auto px-6 flex flex-col space-y-8 pt-50">
    <div
      class="absolute z-0 w-2 h-full bg-white shadow-md inset-0 left-17 md:mx-auto md:right-0 md:left-0"
    >
    </div>
    {children}
  </div>
)
