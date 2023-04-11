package io.tolgee.controllers.internal.e2e_data

import io.swagger.v3.oas.annotations.Hidden
import io.tolgee.development.testDataBuilder.TestDataService
import io.tolgee.development.testDataBuilder.data.ProjectTransferringTestData
import io.tolgee.security.InternalController
import io.tolgee.service.organization.OrganizationService
import io.tolgee.service.project.ProjectService
import io.tolgee.service.security.UserAccountService
import org.springframework.transaction.annotation.Transactional
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@CrossOrigin(origins = ["*"])
@Hidden
@RequestMapping(value = ["internal/e2e-data/project-transferring"])
@Transactional
@InternalController
class ProjectTransferringE2eDataController(
  private val testDataService: TestDataService,
  private val projectService: ProjectService,
  private val userAccountService: UserAccountService,
  private val organizationService: OrganizationService
) {
  @GetMapping(value = ["/generate"])
  @Transactional
  fun generateBasicTestData() {
    val data = ProjectTransferringTestData()
    testDataService.saveTestData(data.root)
  }

  @GetMapping(value = ["/clean"])
  @Transactional
  fun cleanup() {
    val data = ProjectTransferringTestData()
    listOf(data.organization, data.notOwnedOrganization, data.anotherOrganization).forEach {
      organizationService.find(it.slug)?.let { found ->
        organizationService.delete(found.id)
      }
    }
    listOf(data.user, data.user2, data.user).forEach { user ->
      userAccountService.findActive(user.username)?.let {
        projectService.findAllPermitted(it).forEach { repo ->
          projectService.deleteProject(repo.id!!)
        }
        userAccountService.delete(it)
      }
    }
  }
}
