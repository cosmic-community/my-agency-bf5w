import type { Metadata } from 'next';
import { getTeamMembers } from '@/lib/cosmic';
import TeamCard from '@/components/TeamCard';
import SectionHeading from '@/components/SectionHeading';

export const metadata: Metadata = {
  title: 'Our Team — My Agency',
  description:
    'Meet the talented people behind My Agency who bring creativity and expertise to every project.',
};

export default async function TeamPage() {
  const teamMembers = await getTeamMembers();

  return (
    <section className="py-24 bg-white">
      <div className="container-max section-padding">
        {/* Page Header */}
        <div className="text-center mb-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-50 text-brand-700 rounded-full text-sm font-semibold mb-6">
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            Our People
          </div>
        </div>
        <SectionHeading
          title="Meet the Team"
          description="Our diverse team of creative professionals is united by a passion for delivering exceptional results."
        />

        {teamMembers.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-dark-400 text-lg">
              Team information coming soon!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-16">
            {teamMembers.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}