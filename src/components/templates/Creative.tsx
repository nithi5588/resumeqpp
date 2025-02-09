import { ResumeData } from "../PreviewPanel";

export default function Creative({ data }: { data: ResumeData }) {
  return (
    <div className="max-w-[800px] mx-auto p-8 bg-gradient-to-br from-indigo-50 to-white">
      {/* Header */}
      <div className="text-left mb-8">
        {data.profile?.[0] && (
          <>
            <h1 className="text-4xl font-extrabold text-indigo-600 mb-2">
              {data.profile[0].name}
            </h1>
            <div className="text-gray-600 space-y-1">
              <div>{data.profile[0].email}</div>
              <div>{data.profile[0].phone}</div>
              <div>{data.profile[0].location}</div>
              {data.profile[0].linkedin && (
                <a
                  href={data.profile[0].linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  LinkedIn
                </a>
              )}
              {data.profile[0].github && (
                <a
                  href={data.profile[0].github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  GitHub
                </a>
              )}
            </div>
          </>
        )}
      </div>

      {/* Experience */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-indigo-600 mb-4 border-b-2 border-indigo-200 pb-2">
          Experience
        </h2>
        {data.experience?.map((exp, index) => (
          <div key={index} className="mb-6">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
              <div>
                <h3 className="font-bold text-gray-900">{exp.title}</h3>
                <div className="text-indigo-500 font-medium">{exp.company}</div>
                <div className="text-gray-600">{exp.location}</div>
              </div>
              <div className="text-gray-600 text-sm">
                {exp.startDate} - {exp.endDate || "Present"}
              </div>
            </div>
            <p className="mt-2 text-gray-700">{exp.description}</p>
          </div>
        ))}
      </div>

      {/* Education */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-indigo-600 mb-4 border-b-2 border-indigo-200 pb-2">
          Education
        </h2>
        {data.education?.map((edu, index) => (
          <div key={index} className="mb-4">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
              <div>
                <h3 className="font-bold text-gray-900">{edu.degree}</h3>
                <div className="text-indigo-500 font-medium">
                  {edu.institution}
                </div>
                <div className="text-gray-600">{edu.location}</div>
                {edu.gpa && <div className="text-gray-600">GPA: {edu.gpa}</div>}
              </div>
              <div className="text-gray-600 text-sm">
                {edu.startDate} - {edu.endDate}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Skills */}
      {data.skills?.map((skillGroup, index) => (
        <div key={index} className="mb-6">
          <h2 className="text-2xl font-bold text-indigo-600 mb-4 border-b-2 border-indigo-200 pb-2">
            {skillGroup.category}
          </h2>
          <div className="flex flex-wrap gap-2">
            {skillGroup.skills.map((skill, skillIndex) => (
              <span
                key={skillIndex}
                className="bg-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}

      {/* Projects */}
      {data.projects && data.projects.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-indigo-600 mb-4 border-b-2 border-indigo-200 pb-2">
            Projects
          </h2>
          {data.projects.map((project, index) => (
            <div key={index} className="mb-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                <div>
                  <h3 className="font-bold text-gray-900">{project.title}</h3>
                  <div className="text-gray-600">
                    {project.startDate} - {project.endDate}
                  </div>
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline text-sm"
                  >
                    View Project
                  </a>
                )}
              </div>
              <p className="mt-2 text-gray-700">{project.description}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Achievements */}
      {data.achievements && data.achievements.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-indigo-600 mb-4 border-b-2 border-indigo-200 pb-2">
            Achievements & Certifications
          </h2>
          {data.achievements.map((achievement, index) => (
            <div key={index} className="mb-4">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                <div>
                  <h3 className="font-bold text-gray-900">
                    {achievement.title}
                  </h3>
                  <div className="text-indigo-500 font-medium">
                    {achievement.issuer}
                  </div>
                </div>
                <div className="text-gray-600 text-sm">{achievement.date}</div>
              </div>
              {achievement.description && (
                <p className="mt-2 text-gray-700">{achievement.description}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
