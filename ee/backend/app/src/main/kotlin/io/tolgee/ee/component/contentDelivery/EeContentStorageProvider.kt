package io.tolgee.ee.component.contentDelivery

import io.tolgee.component.ContentStorageProvider
import io.tolgee.component.enabledFeaturesProvider.EnabledFeaturesProvider
import io.tolgee.constants.Feature
import io.tolgee.ee.service.ContentStorageService
import io.tolgee.model.contentDelivery.ContentStorage
import io.tolgee.service.project.ProjectService
import org.springframework.stereotype.Component

@Component
class EeContentStorageProvider(
  private val contentStorageService: ContentStorageService,
  private val projectService: ProjectService,
  private val enabledFeaturesProvider: EnabledFeaturesProvider
) : ContentStorageProvider {
  override fun getStorage(projectId: Long, contentStorageId: Long): ContentStorage {
    projectService.findDto(projectId)?.let {
      enabledFeaturesProvider.checkFeatureEnabled(it.organizationOwnerId, Feature.PROJECT_LEVEL_CONTENT_STORAGES)
    }
    return contentStorageService.get(projectId, contentStorageId)
  }
}
