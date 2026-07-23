'use client';

import { useState } from 'react';
import { Container, SectionHeader, JobCard, Input, Textarea, Select, Button } from '@marvinho/ui';
import { Send, CheckCircle, X } from 'lucide-react';
import type { JobListing } from '@marvinho/types';

interface CareersContentProps {
  jobs: JobListing[];
}

export function CareersContent({ jobs }: CareersContentProps) {
  const [selectedJob, setSelectedJob] = useState<JobListing | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleApply = (job: JobListing) => {
    setSelectedJob(job);
  };

  const handleSubmitApplication = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setSelectedJob(null);
    }, 3000);
  };

  return (
    <section className="py-20 lg:py-28 bg-gray-50/50">
      <Container>
        <SectionHeader
          badge="Open Positions"
          title="Join Our Team"
          description="We are growing and looking for talented individuals to join us."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} onApply={handleApply} />
          ))}
        </div>

        {selectedJob && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            <div className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white p-6 sm:p-8">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-[#141414]">Apply for {selectedJob.title}</h3>
                <button onClick={() => { setSelectedJob(null); setSubmitted(false); }} className="text-gray-400 hover:text-gray-600">
                  <X className="h-5 w-5" />
                </button>
              </div>

              {submitted ? (
                <div className="py-8 text-center">
                  <CheckCircle className="mx-auto h-10 w-10 text-emerald-500" />
                  <p className="mt-3 text-sm text-gray-500">Application submitted successfully!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmitApplication} className="mt-6 space-y-4">
                  <Input label="Full Name" id="apply-name" placeholder="Your full name" required />
                  <Input label="Email" id="apply-email" type="email" placeholder="you@example.com" required />
                  <Input label="Phone" id="apply-phone" type="tel" placeholder="+234 XXX XXX XXXX" required />
                  <Select
                    label="Experience Level"
                    id="experience"
                    options={[
                      { value: '0-2', label: '0-2 years' },
                      { value: '3-5', label: '3-5 years' },
                      { value: '5-10', label: '5-10 years' },
                      { value: '10+', label: '10+ years' },
                    ]}
                    placeholder="Select experience"
                    required
                  />
                  <Textarea
                    label="Why should we hire you?"
                    id="apply-message"
                    placeholder="Tell us about your relevant experience and why you are a great fit..."
                    rows={4}
                    required
                  />
                  <Button type="submit" variant="gold" className="w-full" icon={<Send className="h-4 w-4" />} iconPosition="right">
                    Submit Application
                  </Button>
                </form>
              )}
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
