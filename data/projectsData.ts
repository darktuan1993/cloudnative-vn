interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Hướng dẫn thi chứng chỉ Prometheus Certified Associate (PCA)',
    description: `Hành trình chinh phục chứng chỉ Prometheus không đơn thuần là việc học lý thuyết suông, Bài viết này sẽ chia sẻ quá trình tôi ôn luyện, chiến lược thi, và những mẹo nhỏ để bạn có thể tự tin vượt qua kỳ thi....`,
    imgSrc: '/static/images/prometheus-cert.png',
    href: '/blog/cauchuyen/kinh-nghiem-thi-chung-chi-prometheus',
  },
]

export default projectsData
