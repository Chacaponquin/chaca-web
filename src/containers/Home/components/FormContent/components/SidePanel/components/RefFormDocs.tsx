import { useState } from 'react'
import { useQuery } from '../../../../../../../shared/hooks/useQuery'
import { API_ROUTES } from '../../../../../../../shared/routes/api/API_ROUTES'
import GuideContainer from '../shared/components/GuideContainer'

const RefFormDocs = () => {
  const [content, setContent] = useState('')

  const { loading } = useQuery<string>({
    onCompleted: (data) => setContent(data),
    onError: (err) => {},
    url: API_ROUTES.DOCS.GET_REF_FORM_GUIDES,
  })

  return <GuideContainer content={content} loading={loading} />
}

export default RefFormDocs
