import { ResumeData } from "../PreviewPanel";

export default function Minimal({ data }: { data: ResumeData }) {
  return (
    <div className="max-w-[800px] mx-auto p-8 bg-white">
      {/* Header */}
      <div className="mb-8">
        {data.profile?.[0] && (
          <>
            <h1 className="text-3xl font-light text-gray-900 mb-2">
              {data.profile[0].name}
            </h1>
            <div className="text-gray-500 text-sm flex flex-wrap gap-x-6 gap-y-1">
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
        <h2 className="text-lg font-medium text-gray-900 mb-4 uppercase tracking-wider">
          Experience
        </h2>
        {data.experience?.map((exp, index) => (
          <div key={index} className="mb-6">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-1">
              <div>
                <h3 className="font-medium text-gray-900">{exp.title}</h3>
                <div className="text-gray-600">{exp.company}</div>
                <div className="text-gray-500 text-sm">{exp.location}</div>
              </div>
              <div className="text-gray-500 text-sm">
                {exp.startDate} - {exp.endDate || "Present"}
              </div>
            </div>
            <p className="mt-2 text-gray-600 text-sm">{exp.description}</p>
          </div>
        ))}
      </div>

      {/* Education */}
      <div className="mb-8">
        <h2 className="text-lg font-medium text-gray-900 mb-4 uppercase tracking-wider">
          Education
        </h2>
        {data.education?.map((edu, index) => (
          <div key={index} className="mb-4">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-1">
              <div>
                <h3 className="font-medium text-gray-900">{edu.degree}</h3>
                <div className="text-gray-600">{edu.institution}</div>
                <div className="text-gray-500 text-sm">{edu.location}</div>
                {edu.gpa && (
                  <div className="text-gray-500 text-sm">GPA: {edu.gpa}</div>
                )}
              </div>
              <div className="text-gray-500 text-sm">
                {edu.startDate} - {edu.endDate}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Skills */}
      {data.skills?.map((skillGroup, index) => (
        <div key={index} className="mb-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4 uppercase tracking-wider">
            {skillGroup.category}
          </h2>
          <div className="text-gray-600 flex flex-wrap gap-x-2 gap-y-1">
            {skillGroup.skills.map((skill, i) => (
              <span key={i}>{i > 0 ? ` • ${skill}` : skill}</span>
            ))}
          </div>
        </div>
      ))}

      {/* Projects */}
      {data.projects && data.projects.length > 0 && (
        <div className="mb-8">
          <h2 className="text-lg font-medium text-gray-900 mb-4 uppercase tracking-wider">
            Projects
          </h2>
          {data.projects.map((project, index) => (
            <div key={index} className="mb-4">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-1">
                <div>
                  <h3 className="font-medium text-gray-900">{project.title}</h3>
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
              <p className="mt-2 text-gray-600 text-sm">
                {project.description}
              </p>
              <div className="mt-1 text-gray-500 text-sm flex flex-wrap gap-x-2">
                {project.technologies.map((tech, i) => (
                  <span key={i}>{i > 0 ? ` • ${tech}` : tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Achievements */}
      {data.achievements && data.achievements.length > 0 && (
        <div className="mb-8">
          <h2 className="text-lg font-medium text-gray-900 mb-4 uppercase tracking-wider">
            Achievements & Certifications
          </h2>
          {data.achievements.map((achievement, index) => (
            <div key={index} className="mb-4">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-1">
                <div>
                  <h3 className="font-medium text-gray-900">
                    {achievement.title}
                  </h3>
                  <div className="text-gray-600">{achievement.issuer}</div>
                </div>
                <div className="text-gray-500 text-sm">{achievement.date}</div>
              </div>
              {achievement.description && (
                <p className="mt-2 text-gray-600 text-sm">
                  {achievement.description}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
