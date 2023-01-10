import { useState } from 'react'
import { useQuery } from '../../../../../../../shared/hooks/useQuery'
import { API_ROUTES } from '../../../../../../../shared/routes/api/API_ROUTES'

import GuideContainer from '../shared/components/GuideContainer'

const CustomFormDocs = () => {
  const [content, setContent] = useState('')

  const { loading } = useQuery<string>({
    url: API_ROUTES.DOCS.GET_CUSTOM_FORM_GUIDES,
    onCompleted: (data) => {
      setContent(data)
    },
    onError: (err) => {},
  })

  return <GuideContainer loading={loading} content={content} />
}

export default CustomFormDocs
