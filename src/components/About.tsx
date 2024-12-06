import React from 'react';

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">About Me</h2>
          <div className="mb-8">
            <img
              src="https://yt3.ggpht.com/eIFv2a45cbkK_eeRYRYjDf2t0H3nvAUfTk-rqUcErdbWRtlrU894zJu8ktpS0otQ_asYbi6H=s600-c-k-c0x00ffffff-no-rj-rp-mo"
              alt="Charles Kobina Arhin"
              className="w-48 h-48 rounded-full mx-auto mb-6 object-cover"
            />
          </div>
          <p className="text-lg text-gray-700 mb-6">
            Welcome to MrCharlieReelsEdits.com, I'm Charles Kobina Arhin, a seasoned freelance
            video editor with 8 years of experience in the industry. Armed with an advanced
            diploma in television production and video editing, I've dedicated my career to
            transforming raw footage into compelling visual narratives.
          </p>
          <p className="text-lg text-gray-700">
            My passion lies in storytelling through visual media, and I take pride in
            delivering high-quality content that exceeds client expectations. Whether it's
            promotional videos, short films, or social media content, I bring creativity
            and technical expertise to every project.
          </p>
        </div>
      </div>
    </section>
  );
}