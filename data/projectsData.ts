interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Kinh nghiệm thi chứng chỉ Prometheus Certified Associate (PCA)',
    description: `Hành trình chinh phục chứng chỉ Prometheus không đơn thuần là việc học lý thuyết suông, Bài viết này sẽ chia sẻ quá trình tôi ôn luyện, chiến lược thi, và những mẹo nhỏ để bạn có thể tự tin vượt qua kỳ thi....`,
    imgSrc: '/static/images/prometheus-banner.png',
    href: '/blog/thaoluan/kinh-nghiem-thi-chung-chi-prometheus',
  },
  {
    title:
      'Certified Kubernetes Security Specialist(CKS) version 2.0 là kỳ thi khó nhất tôi từng trải qua ',
    description: `Chứng chỉ CKS version 2.0 là đỉnh cao cho những ai theo đuổi bảo mật hệ thống Kubernetes. Bài viết này chia sẻ toàn bộ hành trình ôn luyện, mẹo thi và trải nghiệm thực tế để bạn có thể tự tin chinh phục kỳ thi này....`,
    imgSrc: '/static/images/cks-banner.png',
    href: '/blog/thaoluan/ky-thi-cks-la-ky-thi-kho-nhat-toi-tung-thi',
  },
]

export default projectsData
