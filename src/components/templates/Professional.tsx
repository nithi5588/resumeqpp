import { ResumeData } from "../PreviewPanel";

export default function Professional({ data }: { data: ResumeData }) {
  return (
    <div className="max-w-[800px] mx-auto p-8 bg-white">
      {/* Header */}
      <div className="text-center border-b pb-6 mb-6">
        {data.profile?.[0] && (
          <>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {data.profile[0].name}
            </h1>
            <div className="text-gray-600 flex flex-wrap justify-center gap-x-4 gap-y-1">
              <span>{data.profile[0].email}</span>
              <span>{data.profile[0].phone}</span>
              <span>{data.profile[0].location}</span>
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
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          Professional Experience
        </h2>
        {data.experience?.map((exp, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-gray-900">{exp.title}</h3>
                <div className="text-gray-600">{exp.company}</div>
                <div className="text-gray-500 text-sm">{exp.location}</div>
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
        <h2 className="text-xl font-bold text-gray-900 mb-4">Education</h2>
        {data.education?.map((edu, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-gray-900">{edu.degree}</h3>
                <div className="text-gray-600">{edu.institution}</div>
                <div className="text-gray-500 text-sm">{edu.location}</div>
                {edu.gpa && (
                  <div className="text-gray-500 text-sm">GPA: {edu.gpa}</div>
                )}
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
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            {skillGroup.category}
          </h2>
          <div className="flex flex-wrap gap-2">
            {skillGroup.skills.map((skill, skillIndex) => (
              <span
                key={skillIndex}
                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}

      {/* Projects Section */}
      {data.projects && data.projects.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Projects</h2>
          {data.projects.map((project, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {project.title}
                  </h3>
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
                    className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Achievements Section */}
      {data.achievements && data.achievements.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Achievements & Certifications
          </h2>
          {data.achievements.map((achievement, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {achievement.title}
                  </h3>
                  <div className="text-gray-600">{achievement.issuer}</div>
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
