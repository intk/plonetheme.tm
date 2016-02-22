

from plone.app.layout.viewlets import ViewletBase
from AccessControl import getSecurityManager

class PortletsViewlet(ViewletBase):
    def update(self):
        self.available = True

    def showManageButton(self):
        secman = getSecurityManager()
        if not secman.checkPermission('Portlets: Manage portlets', self.context):
            return False
        else:
            return True

