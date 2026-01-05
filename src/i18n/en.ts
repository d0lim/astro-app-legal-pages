export default {
  terms: {
    title: 'Terms of Service',
    sections: {
      acceptance: {
        title: '1. Acceptance of Terms',
        content: (siteName: string, siteUrl: string) =>
          `By accessing and using ${siteName} (${siteUrl}), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our service.`,
      },
      serviceDescription: {
        title: '2. Description of Service',
        content: (siteName: string) =>
          `${siteName} provides web-based services as described on our website. We reserve the right to modify, suspend, or discontinue any part of the service at any time.`,
      },
      userObligations: {
        title: '3. User Obligations',
        intro: (siteName: string) => `As a user of ${siteName}, you agree to:`,
        items: [
          'Provide accurate and complete information',
          'Maintain the security of your account',
          'Not use the service for any illegal purposes',
          'Not interfere with or disrupt the service',
          'Comply with all applicable laws and regulations',
        ],
      },
      intellectualProperty: {
        title: '4. Intellectual Property',
        content: (siteName: string) =>
          `All content, features, and functionality of ${siteName} are owned by us and are protected by international copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.`,
      },
      termination: {
        title: '5. Termination',
        content: (siteName: string) =>
          `We reserve the right to terminate or suspend your access to ${siteName} at any time, without prior notice, for conduct that we believe violates these Terms of Service or is harmful to other users, us, or third parties.`,
      },
      disclaimer: {
        title: '6. Disclaimer of Warranties',
        content: (siteName: string) =>
          `${siteName} is provided "as is" and "as available" without any warranties of any kind, either express or implied. We do not warrant that the service will be uninterrupted, secure, or error-free.`,
      },
      limitationOfLiability: {
        title: '7. Limitation of Liability',
        content: (siteName: string) =>
          `To the fullest extent permitted by law, ${siteName} shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service.`,
      },
      governingLaw: {
        title: '8. Governing Law',
        content: () =>
          `These Terms of Service shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles.`,
      },
      changes: {
        title: '9. Changes to Terms',
        content: (siteName: string) =>
          `We reserve the right to modify these Terms of Service at any time. We will notify users of any material changes by posting the new terms on this page with an updated revision date. Your continued use of ${siteName} after such changes constitutes acceptance of the new terms.`,
      },
      contact: {
        title: '10. Contact Us',
        content: (email: string) =>
          `If you have any questions about these Terms of Service, please contact us at`,
        email: email => email,
      },
    },
  },
  privacy: {
    title: 'Privacy Policy',
    sections: {
      introduction: {
        title: '1. Introduction',
        content: (siteName: string, siteUrl: string) =>
          `Welcome to ${siteName}. We respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website (${siteUrl}).`,
      },
      dataCollection: {
        title: '2. Information We Collect',
        intro: () => `We may collect the following types of information:`,
        defaultItems: [
          'Email address',
          'Usage data',
          'Cookies and similar technologies',
        ],
      },
      dataUsage: {
        title: '3. How We Use Your Information',
        intro: () => `We use the information we collect to:`,
        items: [
          'Provide and maintain our service',
          'Improve and personalize your experience',
          'Communicate with you about updates and changes',
          'Analyze usage patterns to improve our service',
          'Detect and prevent fraud or abuse',
        ],
      },
      dataSecurity: {
        title: '4. Data Security',
        content: () =>
          `We implement appropriate technical and organizational security measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.`,
      },
      cookies: {
        title: '5. Cookies and Tracking Technologies',
        content: () =>
          `We may use cookies and similar tracking technologies to track activity on our service and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our service.`,
      },
      thirdPartyServices: {
        title: '6. Third-Party Services',
        content: () =>
          `We may employ third-party companies and individuals to facilitate our service, provide service-related services, or assist us in analyzing how our service is used. These third parties have access to your personal data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.`,
      },
      userRights: {
        title: '7. Your Rights',
        intro: () =>
          `Depending on your location, you may have the following rights regarding your personal data:`,
        items: [
          'The right to access your personal data',
          'The right to rectify inaccurate personal data',
          'The right to request deletion of your personal data',
          'The right to restrict processing of your personal data',
          'The right to data portability',
          'The right to object to processing of your personal data',
        ],
        outro: (email: string) =>
          `To exercise any of these rights, please contact us at`,
      },
      childrenPrivacy: {
        title: "8. Children's Privacy",
        content: () =>
          `Our service is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and you are aware that your child has provided us with personal data, please contact us.`,
      },
      changes: {
        title: '9. Changes to This Privacy Policy',
        content: () =>
          `We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this page. You are advised to review this Privacy Policy periodically for any changes.`,
      },
      contact: {
        title: '10. Contact Us',
        content: () =>
          `If you have any questions about this Privacy Policy, please contact us at`,
      },
    },
  },
};
