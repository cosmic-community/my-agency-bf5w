import type { TeamMemberObject } from '@/types';
import { getMetafieldValue } from '@/types';

interface TeamCardProps {
  member: TeamMemberObject;
}

export default function TeamCard({ member }: TeamCardProps) {
  const name = getMetafieldValue(member.metadata?.name) || member.title;
  const role = getMetafieldValue(member.metadata?.role);
  const bio = getMetafieldValue(member.metadata?.bio);
  const photo = member.metadata?.photo;
  const linkedinUrl = getMetafieldValue(member.metadata?.linkedin_url);

  return (
    <div className="group text-center">
      {/* Photo */}
      <div className="relative w-48 h-48 mx-auto mb-6 rounded-2xl overflow-hidden bg-dark-100 shadow-md group-hover:shadow-xl transition-shadow">
        {photo ? (
          <img
            src={`${photo.imgix_url}?w=400&h=400&fit=crop&auto=format,compress&facepad=3&faceindex=1`}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            width={192}
            height={192}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-brand-100 to-brand-200">
            <span className="text-5xl font-bold text-brand-600">
              {name.charAt(0)}
            </span>
          </div>
        )}
      </div>

      {/* Info */}
      <h3 className="text-lg font-bold text-dark-900 mb-1">{name}</h3>

      {role && (
        <p className="text-brand-600 font-medium text-sm mb-3">{role}</p>
      )}

      {bio && (
        <p className="text-dark-500 text-sm leading-relaxed line-clamp-3 max-w-xs mx-auto">
          {bio}
        </p>
      )}

      {linkedinUrl && (
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-dark-400 hover:text-brand-600 mt-4 transition-colors"
          aria-label={`${name} LinkedIn profile`}
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>
      )}
    </div>
  );
}